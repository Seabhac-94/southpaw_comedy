# SouthPaw Comedy Ireland

Cork, Dublin & Limerick are homes of comedy in Ireland, 
and have been for many years. 
The goal of SouthPaw Comedy Ireland is to create a platform 
in which travelling comedy lovers can see where the closest club
to them is in each city.

## UX

Comedy is for everyone, and is bold and loud. For the UX design on this
website, this is what will be achieved, a bold, loud website where users can easily navigate through the 
seledted counties and comedy clubs in the chosen area.

#### Design Considerations

1. Background: an image of a crowd laughing was chosen as the background, to highlight the essence of comedy itself.
2. Logo: The animated gif was first stationary, but then animation was used to have it pulsing, this gives the site a bit more life and once again, shows the emotions that come with comedy.
3. Font: A loud and bold font was used in the navbar and footer, however, the content font used was standard, this was to not distract the user from the main purpose of the page.
4. Map: The map is mildly transparent until the an area is selcted, this gives the user a better view of the laughing crowd when the first visit the page, but as the user begins to use the site, the map becomes solid as it is now in use.


## Features

The following features have been implemented already:

#### Existing Features

1. Incorporated into the site will be google maps, which will have manual place markers
in each of the three counties for the top comedy clubs there. This idea stems from
the idea that SouthPaw Comedy Ireland has hand-picked and recommends these particular comedy clubs, instead 
of a generic "comedy clubs" search engine.

2. Next to the maps will be a select county feature. Originally it was thought to
be a "form group" type, but on further devolpment of the site, it was decided to utilise
button features, with each of the buttons colored the same as the county it represents.

3. Following the button selection, JavaScript has been utilised to slideDown and
display key information on each of the comedy clubs in that area.

4. 'Zoom to' function on all markers. Each time the user selects an item A - D, the map will automatically zoom to that marker.

#### Possible Future Features 

1. Directions: in the future it is planned to link google maps directions ability to
the site, to give users a clear indication of how close the clubs are to them.

2. Restaurants: There is plans to also incorporate a feature that will allow users
to see which restaurants are closest to each club, based on budget and ratings.

## Technologies Used

1. <a href="https://getbootstrap.com" target='_blank'>Bootstrap</a> was the basic frameworks off which the site was built. Bootstrap was chosen as it provides a simple yet effective frameworks off of which sites can be built.
2. Google Maps API was used to implement the map feature as it provided the data needed to build a successful site which utilises a map function.
3. jQuery was used to implement the
interactive features of the project to simplify manipulation of the DOM and as it provides a good libary of effects for UX.

## Testing

For testing this project - Chrome Developer Tools were used along with running the site on a functional level at every milestone.
<br>
##### Testing Procedure for Functionality
1. Open site on preview mode/through github.
2. Select each cluster on the map - map should zoom to area.
3. Select 'Reset Search'. Map should reset on var= ireland.
4. Select 'Cork'. Results box opens, select each item A - D, in order, then at in reverse, then at random. This
ensures that text slideToggle function works.
5. When Cork is selected, map should zoom, to Cork. When each item, A-D is selected, map should
zoom to each marker with same label.
6. Once satisfied that this is working, select 'Reset Serch', all results should close and map re-centers.
7. Repeat test on 'Dublin' & 'Limerick'

##### Testing Procedure for Responsiveness
1. Developer tools was opened and the above tests were completed on a number  of different platforms including
iPhone 5/SE, iPhone 6/7/8, iPAd, iPad Pro, iPad Mini, Galaxy S5, Pixel 2, Pixel 2XL. Along with this, standard settings form the size bar were selcted, i.e;
Mobile S/M/L, Tablet, Laptop & Laptop L.
2. For each device, the site was checked to enure there wa sno overlap of information and that the presentation looked well.

## Deployment

This site was deployed through <a href="https://github.com" target='_blank'>Github</a>. It uses the master branch. It updates each time there is a new push to the repository.
<br>
The deployed site can be found at <a href="https://seabhac-94.github.io/southpaw_comedy/" target='_blank'>SouthPaw Comedy Ireland</a> whilst the code can be found at 
<a href="https://github.com/Seabhac-94/southpaw_comedy" target='_blank'>SouthPaw Comedy Ireland - Code</a>.


## Credits

#### Sources
The following articles/websites were used for results content;
1. <a href="https://www.yaycork.ie/need-a-laugh-here-are-4-of-the-best-comedy-clubs-in-cork/" target=_blank>Yay Cork</a>
2. <a href="https://lovindublin.com/feature/here-are-9-of-the-best-comedy-nights-in-dublin" target=_blank>Lovin' Dublin</a>
3. <a href="https://www.tripadvisor.ie" target=_blank>Trip Advisor</a>

#### Media

The background photo for this project was sourced from <a href="https://www.istockphoto.com/ie/photos/laughing-crowd?mediatype=photography&phrase=laughing%20crowd&sort=mostpopular" target='_blank'>iStock</a>.
<br>
The laughing icon was sourced from <a href="https://www.clipartmax.com/max/m2i8H7b1m2G6H7b1/" target='_blank'>Clipart Max</a>.
<br>
Copyright logo was sourced from <a href="https://fontawesome.com" target='_blank'>FontAwesome</a>

#### Final Notes
This website is intended for educational use only.