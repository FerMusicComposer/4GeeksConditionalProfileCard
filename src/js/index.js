import '../style/index.scss';

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
    console.log('These are the current variables: ', variables); //print on the console
    // here we ask the logical questions to make decisions on how to build the html
    // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
    let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
    let name = `${variables.name}`;
    let lastName = `${variables.lastname}`;
    let role = `${variables.role}`;
    let country = `${variables.country}`;
    let city = `${variables.city}`;
    let twitter = `${variables.twitter}`;
    let github = `${variables.github}`;
    let linkedin = `${variables.linkedin}`;
    let instagram = `${variables.instagram}`;
    let socialMediaPosition = `${variables.socialMediaPosition}`;
    if (variables.includeCover == false) cover = "<div class='cover'></div>";
    if (variables.name == null) name = 'Fernando';
    if (variables.lastname == null) lastName = 'Salamanca';
    if (variables.role == null) role = 'Web Developer';
    if (variables.country == null) country = 'USA';
    if (variables.city == null) city = 'Miami';
    if (variables.twitter == null)
        twitter = 'https://twitter.com/Fer_SalamancaM';
    if (variables.github == null)
        github = 'https://github.com/FerMusicComposer';
    if (variables.linkedin == null)
        linkedin = 'https://www.linkedin.com/in/fernando-salamanca-m-30073ba0/';
    if (variables.instagram == null) instagram = 'https://www.instagram.com/';
    if (variables.sosocialMediaPosition === 'left') {
        socialMediaPosition = 'position-left';
    } else if (variables.sosocialMediaPosition === 'right') {
        socialMediaPosition = 'position-fight';
    }

    // reset the website body with the new html output
    document.querySelector('#widget_content').innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class=${socialMediaPosition}>
            <li><a href=${twitter}><i class="fa fa-twitter"></i></a></li>
            <li><a href=${github}><i class="fa fa-github"></i></a></li>
            <li><a href=${linkedin}><i class="fa fa-linkedin"></i></a></li>
            <li><a href=${instagram}><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
    window.variables = {
        // if includeCover is true the algorithm should
        includeCover: true,
        // this is the url of the image that will used as background for the profile cover
        background:
            'https://images.unsplash.com/photo-1511974035430-5de47d3b95da',
        // this is the url for the profile avatar
        avatarURL: 'https://randomuser.me/api/portraits/women/42.jpg',
        // social media bar position (left or right)
        socialMediaPosition: 'position-left',
        // social media usernames
        twitter: null,
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null,
    };
    render(window.variables); //render the card for the first time

    document.querySelectorAll('.picker').forEach(function(elm) {
        elm.addEventListener('change', function(e) {
            // <- add a listener to every input
            const attribute = e.target.getAttribute('for'); // when any input changes, collect the value
            let values = {};
            values[attribute] =
                this.value == '' || this.value == 'null'
                    ? null
                    : this.value == 'true'
                    ? true
                    : this.value == 'false'
                    ? false
                    : this.value;
            render(Object.assign(window.variables, values)); // render again the card with new valus
        });
    });
};
