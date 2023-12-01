let bwidth = 70;
function init_widthChange() {
    document.querySelectorAll('.changer').forEach((el) => {
        el.onclick = (e) => {
            e.preventDefault();
            if (bwidth === 70) {
                document.body.style.width = '40%';
                bwidth = 40;
            } else {
                bwidth += 10;
                document.body.style.width = bwidth + '%';
            }
        }
    });
};