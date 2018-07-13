const jumbo = {

    jumbo: document.getElementsByClassName('jumbo')[0],
    jumbo2: document.getElementsByClassName('jumbo2')[0],
    about: document.getElementById('home'),
    resume: document.getElementById('resume'),

    showResume: function showResume() {

        this.jumbo.style.display = 'none';
        this.jumbo2.style.display = 'block';

    },

    showHome: function showHome() {

        this.jumbo.style.display = 'block';
        this.jumbo2.style.display = 'none';

    },

};

jumbo.about.addEventListener('click', function() {jumbo.showHome.call(jumbo)});
jumbo.resume.addEventListener('click', function() {jumbo.showResume.call(jumbo)});
