/**
 * MANE ATTRACTION - Interactive Hair Background
 * Woman silhouette with flowing hair that reacts to mouse/touch
 */

export class HairBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.canvas.className = 'hair-canvas';
        this.ctx = this.canvas.getContext('2d');

        this.hairs = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseInfluence = 0;
        this.isActive = false;
        this.isRunning = true;

        // Hair colors - natural dark shades
        this.colors = [
            'rgba(45, 35, 30, 0.7)',      // Dark brown
            'rgba(60, 45, 35, 0.65)',     // Medium brown
            'rgba(35, 25, 20, 0.75)',     // Deep brown
            'rgba(80, 55, 40, 0.6)',      // Light brown
            'rgba(50, 40, 32, 0.7)',      // Warm brown
        ];

        this.init();
    }

    init() {
        this.container.style.position = 'relative';
        this.container.insertBefore(this.canvas, this.container.firstChild);

        this.resize();
        this.createHairs();
        this.bindEvents();
        this.animate();
    }

    resize() {
        const rect = this.container.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // Calculate silhouette position (centered)
        this.silhouetteX = this.width / 2;
        this.silhouetteY = this.height * 0.45;
        this.silhouetteScale = Math.min(this.width, this.height) * 0.003;
    }

    createHairs() {
        this.hairs = [];
        const hairCount = 80 + Math.floor((this.width * this.height) / 8000);

        for (let i = 0; i < hairCount; i++) {
            this.hairs.push(this.createHair());
        }
    }

    createHair() {
        // Hair originates from the head area of the silhouette
        const headCenterX = this.silhouetteX;
        const headTopY = this.silhouetteY - 80 * this.silhouetteScale;

        // Distribute hair around the head in a natural pattern
        const angle = (Math.random() * Math.PI * 1.2) - Math.PI * 0.1; // Mostly sides and back
        const headRadius = 45 * this.silhouetteScale;

        // Start position around the head
        const startAngle = Math.PI * 0.3 + Math.random() * Math.PI * 1.4; // From top-left around to top-right
        const x = headCenterX + Math.cos(startAngle) * headRadius * (0.8 + Math.random() * 0.4);
        const y = headTopY + Math.sin(startAngle) * headRadius * 0.6 + headRadius * 0.3;

        const length = 150 + Math.random() * 250;
        const segments = 18 + Math.floor(Math.random() * 12);
        const thickness = 1 + Math.random() * 2;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const waveSpeed = 0.15 + Math.random() * 0.4;
        const waveAmplitude = 15 + Math.random() * 25;

        // Hair flows downward and outward
        const side = x > headCenterX ? 1 : -1;
        const baseAngle = Math.PI / 2 + side * (0.2 + Math.random() * 0.4);

        return {
            x,
            y,
            length,
            segments,
            thickness,
            color,
            waveSpeed,
            waveAmplitude,
            baseAngle,
            phase: Math.random() * Math.PI * 2,
            velocityX: 0,
            velocityY: 0,
            side
        };
    }

    bindEvents() {
        this.container.addEventListener('mousemove', (e) => this.handleMove(e));
        this.container.addEventListener('mouseenter', () => this.isActive = true);
        this.container.addEventListener('mouseleave', () => {
            this.isActive = false;
            this.mouseInfluence = 0;
        });

        this.container.addEventListener('touchmove', (e) => {
            if (e.touches.length === 1) {
                this.handleMove(e.touches[0]);
            }
        }, { passive: true });
        this.container.addEventListener('touchstart', (e) => {
            this.isActive = true;
            if (e.touches.length === 1) {
                this.handleMove(e.touches[0]);
            }
        }, { passive: true });
        this.container.addEventListener('touchend', () => {
            this.isActive = false;
            this.mouseInfluence = 0;
        });

        window.addEventListener('resize', () => {
            this.resize();
            this.createHairs();
        });
    }

    handleMove(e) {
        const rect = this.container.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
        this.mouseInfluence = 1;
    }

    animate() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const time = Date.now() * 0.001;

        // Draw hair behind the silhouette first (back hair)
        this.hairs.filter(h => h.y < this.silhouetteY - 40 * this.silhouetteScale).forEach(hair => {
            this.updateHair(hair, time);
            this.drawHair(hair, time);
        });

        // Draw the woman silhouette
        this.drawSilhouette();

        // Draw hair in front (side hair flowing down)
        this.hairs.filter(h => h.y >= this.silhouetteY - 40 * this.silhouetteScale).forEach(hair => {
            this.updateHair(hair, time);
            this.drawHair(hair, time);
        });

        if (!this.isActive && this.mouseInfluence > 0) {
            this.mouseInfluence *= 0.95;
        }

        requestAnimationFrame(() => this.animate());
    }

    drawSilhouette() {
        const ctx = this.ctx;
        const x = this.silhouetteX;
        const y = this.silhouetteY;
        const s = this.silhouetteScale;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(s, s);

        // Gradient for the silhouette
        const gradient = ctx.createLinearGradient(0, -100, 0, 100);
        gradient.addColorStop(0, 'rgba(230, 125, 129, 0.15)');
        gradient.addColorStop(1, 'rgba(230, 125, 129, 0.08)');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(230, 125, 129, 0.3)';
        ctx.lineWidth = 2;

        // Draw elegant woman face silhouette (side profile facing right)
        ctx.beginPath();

        // Start at top of head
        ctx.moveTo(-20, -80);

        // Forehead curve
        ctx.bezierCurveTo(10, -85, 30, -70, 35, -50);

        // Brow and nose
        ctx.bezierCurveTo(38, -40, 40, -30, 38, -20);
        ctx.bezierCurveTo(45, -15, 48, -5, 45, 5);

        // Nose tip and upper lip
        ctx.bezierCurveTo(42, 10, 35, 15, 30, 18);

        // Lips
        ctx.bezierCurveTo(32, 22, 30, 28, 25, 30);

        // Chin
        ctx.bezierCurveTo(20, 38, 10, 50, 0, 55);

        // Neck
        ctx.bezierCurveTo(-5, 58, -8, 70, -5, 90);
        ctx.lineTo(-25, 90);
        ctx.bezierCurveTo(-28, 70, -25, 55, -30, 45);

        // Back of neck to head
        ctx.bezierCurveTo(-35, 30, -45, 0, -50, -30);
        ctx.bezierCurveTo(-52, -50, -45, -75, -20, -80);

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Add subtle facial features
        ctx.strokeStyle = 'rgba(230, 125, 129, 0.25)';
        ctx.lineWidth = 1.5;

        // Eye
        ctx.beginPath();
        ctx.ellipse(20, -25, 8, 4, -0.1, 0, Math.PI * 2);
        ctx.stroke();

        // Eyebrow
        ctx.beginPath();
        ctx.moveTo(10, -35);
        ctx.quadraticCurveTo(20, -40, 32, -38);
        ctx.stroke();

        // Lips hint
        ctx.beginPath();
        ctx.moveTo(25, 22);
        ctx.quadraticCurveTo(30, 25, 28, 28);
        ctx.stroke();

        ctx.restore();
    }

    updateHair(hair, time) {
        if (this.mouseInfluence > 0.01) {
            const dx = this.mouseX - hair.x;
            const dy = this.mouseY - hair.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 180;

            if (distance < maxDistance) {
                const force = (1 - distance / maxDistance) * this.mouseInfluence;
                hair.velocityX += (dx / distance) * force * 3;
                hair.velocityY += (dy / distance) * force * 3;
            }
        }

        hair.velocityX *= 0.9;
        hair.velocityY *= 0.9;
    }

    drawHair(hair, time) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = hair.color;
        this.ctx.lineWidth = hair.thickness;
        this.ctx.lineCap = 'round';

        const segmentLength = hair.length / hair.segments;
        let x = hair.x;
        let y = hair.y;

        this.ctx.moveTo(x, y);

        for (let i = 1; i <= hair.segments; i++) {
            const progress = i / hair.segments;
            const wave = Math.sin(time * hair.waveSpeed + hair.phase + progress * 4) * hair.waveAmplitude * progress;

            const mouseWaveX = hair.velocityX * progress * 4;
            const mouseWaveY = hair.velocityY * progress * 4;

            const angle = hair.baseAngle + wave * 0.015;
            x += Math.cos(angle) * segmentLength + mouseWaveX;
            y += Math.sin(angle) * segmentLength + wave * 0.3 + mouseWaveY;

            this.ctx.lineTo(x, y);
        }

        this.ctx.stroke();
    }

    destroy() {
        this.isRunning = false;
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

export function initHairBackground(containerId) {
    return new HairBackground(containerId);
}
