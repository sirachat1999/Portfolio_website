
        // 1. จัดการการส่งฟอร์มติดต่อ (Contact Form)
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(event) {
            // ป้องกันการโหลดหน้าเว็บใหม่เมื่อกด submit
            event.preventDefault(); 
            
            // ซ่อนฟอร์มและแสดงข้อความสำเร็จ
            contactForm.reset(); // ล้างข้อมูลในฟอร์ม
            successMessage.classList.remove('d-none'); // ลบคลาส d-none เพื่อแสดงข้อความ
            
            // สั่งให้ข้อความสำเร็จหายไปเองใน 4 วินาที
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 4000);
        });

        // 2. จัดการปุ่ม Back to Top
        const backToTopBtn = document.getElementById("backToTopBtn");

        // เมื่อเลื่อนหน้าเว็บ
        window.onscroll = function() {
            // ถ้าเลื่อนลงมามากกว่า 300px ให้แสดงปุ่ม
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        // เมื่อคลิกปุ่ม ให้เลื่อนกลับไปบนสุด
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // เลื่อนแบบนุ่มนวล
            });
        });
