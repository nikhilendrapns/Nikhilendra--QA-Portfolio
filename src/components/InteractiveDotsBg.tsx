import { useEffect, useRef } from 'react';

export default function InteractiveDotsBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160, // Radius of mouse interaction
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Super slow, elegant drift
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseRadius = Math.random() * 1.5 + 1;
        this.radius = this.baseRadius;
        
        // Soft cyber-tech colors (Cyan / Teal / Purple)
        const rand = Math.random();
        if (rand < 0.4) {
          this.color = '34, 211, 238'; // Cyan
        } else if (rand < 0.7) {
          this.color = '168, 85, 247'; // Purple
        } else {
          this.color = '45, 212, 191'; // Teal
        }
        this.alpha = Math.random() * 0.35 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce back subtly on borders with dampening
        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(this.x, width));
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(this.y, height));
        }

        // Antigravity Mouse Interaction: Dots shift away when mouse hovers
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          // Calculate force vector pointing away from mouse
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Gently push the particles away
          const pushX = Math.cos(angle) * force * 1.8;
          const pushY = Math.sin(angle) * force * 1.8;
          
          this.x += pushX;
          this.y += pushY;
          
          // Glow/grow size subtly in mouse proximity
          this.radius = this.baseRadius + force * 2;
        } else {
          // Smoothly revert to original radius
          if (this.radius > this.baseRadius) {
            this.radius -= 0.1;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
        
        // Enhanced focus point if very close to mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius + 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${this.color}, 0.15)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Dynamic scale particle count based on screen size
    const particleCount = Math.min(Math.floor((width * height) / 12000), 120);
    const particles: Particle[] = [];

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      // Connect close particles with delicate glowing lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            // Stronger opacity close to mouse, overall very subtle
            const mouseProximityOpacity = Math.max(
              0,
              1 - Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2) / mouse.radius
            );

            // Base connection opacity based on distance
            const baseAlpha = (1 - dist / 115) * 0.08;
            const finalAlpha = baseAlpha + mouseProximityOpacity * 0.1;

            if (finalAlpha > 0) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${finalAlpha})`;
              ctx.lineWidth = dist < 70 ? 0.75 : 0.45;
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render interactive particles
      for (const p of particles) {
        p.update();
        p.draw();
      }

      // Render connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen', opacity: 0.9 }}
    />
  );
}
