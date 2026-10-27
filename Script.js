 // این اسکریپت برای حرکت دادن label هنگام فوکوس یا پر بودن فیلد است
document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.input-field input');

    inputFields.forEach(input => {
        // اگر فیلدی از قبل مقداری داشته باشد (مثلاً اگر صفحه رفرش شود)
        if (input.value) {
            input.parentElement.classList.add('has-value');
        }

        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
                this.parentElement.classList.remove('has-value');
            } else {
                this.parentElement.classList.add('has-value');
            }
        });
    });
});
