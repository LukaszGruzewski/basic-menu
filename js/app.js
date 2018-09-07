document.addEventListener('DOMContentLoaded', function () {

    var elLi = document.querySelectorAll('.nav > ul > li');
    //  console.log(elLi)

    for (i = 0; i < elLi.length; i++) {
        var singleElLi = elLi[i];

        singleElLi.addEventListener('mouseover', function () {
            var underList = this.firstElementChild;
            if (underList !== null) {
                underList.style.display = 'block';
            }
        });

        singleElLi.addEventListener('mouseout', function () {
            var underList = this.firstElementChild;
            if (underList !== null) {
                underList.style.display = '';
            }
        });

    }

});