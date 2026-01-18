/**
 * MANE ATTRACTION - Interactive Dye Brush Background
 * Color spreads like hair dye when you brush over it
 */

export class DyeBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.canvas.className = 'dye-canvas';
        this.ctx = this.canvas.getContext('2d');

        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;

        // Dye colors - hair dye palette
        this.colors = [
            'rgba(230, 125, 129, 0.3)',   // Rose
            'rgba(212, 90, 95, 0.25)',    // Deep rose
            'rgba(249, 213, 211, 0.35)',  // Light pink
            'rgba(180, 100, 120, 0.28)',  // Mauve
            'rgba(200, 80, 100, 0.25)',   // Berry
        ];
        this.currentColorIndex = 0;

        this.init();
    }

    init() {
        this.container.style.position = 'relative';
        this.container.insertBefore(this.canvas, this.container.firstChild);

        this.resize();
        this.bindEvents();

        // Slowly fade the dye over time
        this.startFade();
    }

    resize() {
        const rect = this.container.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    bindEvents() {
        // Mouse events
        this.container.addEventListener('mouseenter', (e) => {
            this.isDrawing = true;
            this.updatePosition(e);
        });

        this.container.addEventListener('mousemove', (e) => {
            if (this.isDrawing) {
                this.paint(e);
            }
        });

        this.container.addEventListener('mouseleave', () => {
            this.isDrawing = false;
            this.cycleColor();
        });

        // Touch events
        this.container.addEventListener('touchstart', (e) => {
            this.isDrawing = true;
            if (e.touches.length === 1) {
                this.updatePosition(e.touches[0]);
            }
        }, { passive: true });

        this.container.addEventListener('touchmove', (e) => {
            if (this.isDrawing && e.touches.length === 1) {
                this.paint(e.touches[0]);
            }
        }, { passive: true });

        this.container.addEventListener('touchend', () => {
            this.isDrawing = false;
            this.cycleColor();
        });

        // Resize
        window.addEventListener('resize', () => this.resize());
    }

    updatePosition(e) {
        const rect = this.container.getBoundingClientRect();
        this.lastX = e.clientX - rect.left;
        this.lastY = e.clientY - rect.top;
    }

    paint(e) {
        const rect = this.container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Draw dye brush stroke
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);

        // Main brush stroke
        this.ctx.strokeStyle = this.colors[this.currentColorIndex];
        this.ctx.lineWidth = 60 + Math.random() * 40;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.stroke();

        // Add some splatter/spread effect
        for (let i = 0; i < 3; i++) {
            const offsetX = (Math.random() - 0.5) * 80;
            const offsetY = (Math.random() - 0.5) * 80;
            const size = 10 + Math.random() * 30;

            this.ctx.beginPath();
            this.ctx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.colors[this.currentColorIndex];
            this.ctx.fill();
        }

        this.lastX = x;
        this.lastY = y;
    }

    cycleColor() {
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    }

    startFade() {
        setInterval(() => {
            // Gradually fade the canvas
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
            this.ctx.fillRect(0, 0, this.width, this.height);
        }, 100);
    }

    destroy() {
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

export function initDyeBackground(containerId) {
    return new DyeBackground(containerId);
}
