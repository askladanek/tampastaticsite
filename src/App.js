import React from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
{/* <Switch>
 <Route path="/about">
<About />
</Route>
<Route path="/users">
<Users />
</Route>
<Route path="/">
<Home />
</Route>
</Switch> */}
function App() {
  return (
    <Router>
    <div className="App">
      <Container>
        <Switch>
        <Route path="/TampaConventionCenter">
        <Row className="App-Row" >
          <div id = "hotspot-tampa-convention-center">
            <h1  
            >Tampa Convention Center</h1>
            <br />
            <label>The Tampa Convention Center (TCC) is a state-of-the-art facility on the waterfront in downtown Tampa Bay. With 200,000 square feet of exhibit space and 36,000 square feet of ballroom and breakout space, this is the perfect place to host your next meeting or convention. TCC is located on the Tampa Riverwalk which connects you to our incredible hotels like the JW Marriott and incredible dining at Sparkman Wharf. 
            </label>
            <a target="_parent" href="https://www.tampagov.net/tcc/home" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/1-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/1-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/1-3.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/1-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/1-5.jpeg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaBayVisitorCenter">
        <Row className="App-Row" >
          <div id = "hotspot-unlock-tampa-bay-visitors-center">
            <h1>Unlock Tampa Bay Visitors Center</h1>
            <br />
            <label>
            Situated in the heart of downtown, the Unlock Tampa Bay Visitors Center showcases the daring spirit of Tampa Bay and is the perfect place to start your stay. From knowledgeable staff to state-of-the-art technology visitors receive a next-generation travel experience. And as retail location, all the items on display are either made in Tampa Bay or tied to the region’s identity as the hip heart of Florida’s Gulf coast. It’s the space where you’ll find the perfect piece of Tampa Bay to take home to friends and family.
            </label>
            <a target="_parent" href="https://www.visittampabay.com/visitors-center/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/2-1.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/2-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/2-3.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/2-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/2-5.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/2-6.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>     
        <Route path="/TampaFloridaAquarium">
        <Row className="App-Row" >
          <div id = "hotspot-the-florida-aquarium">
            <h1>The Florida Aquarium</h1>
            <br />
            <label>Swim with the sharks – if you dare. The Florida Aquarium helps visitors discover the intricate nature of Florida’s aquatic ecosystems. Visitors follow the water from inland springs and swamps downstream to the Gulf of Mexico. Along the way, visitors encounter 20,000 aquatic plants and animals, including four sharks in its enormous coral reef exhibit. For an additional fee visitors can swim or dive with the fishes and see the aquatic world up close. The aquarium also offers dolphin-spotting expeditions into Tampa Bay aboard the Bay Spirit II several times a day.
            </label>
            <a target="_parent" href="http://www.flaquarium.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/3-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/3-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/3-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/3-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/3-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaSparkmanWharf">
        <Row className="App-Row" >
          <div id = "hotspot-sparkman-wharf">
            <h1>Sparkman Wharf</h1>
            <br />
            <label>
            Tampa Bay’s latest outdoor and entertainment destination, Sparkman Wharf. Located in the Channel District along the Garrison Channel, enjoy a new type of dining experience housed in refurbished shipyard crates. This outdoor experience offers a lush one-acre park to enjoy friends, family, and even your furry friend. This is the perfect place to take in the great waterfront views, craft beer, live music, and exceptional dining.            </label>
            <a target="_parent" href="https://sparkmanwharf.com/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/4-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/4-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/4-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/4-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/4-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaBayHistoryCenter">
        <Row className="App-Row" >
          <div id = "hotspot-tampa-bay-history-center">
            <h1>Tampa Bay History Center</h1>
            <br />
            <label>
            Tampa Bay History Center houses 12,000 years of local history, starting with the Tocobaga Indians who first called the waters of Tampa Bay home. Interactive exhibits, including a café version of Tampa Bay’s iconic Columbia Restaurant, give visitors a deep understanding of the forces that created today’s Tampa Bay region. The interactive “Treasure Seekers” exhibit celebrates Florida’s history of pirates, conquistadors, and shipwrecks and features a full-sized sloop, hands-on discoveries in 18th Century navigation, and actual Spanish treasure recovered from shipwrecks.  Experience The Touchton Map Library to view maps, charts and other historic documents dating back from the early European exploration of North America through the early 21st century.            
            </label>
            <a target="_parent" href="http://tampabayhistorycenter.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/5-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <video src={'/assets/5-2.mp4'} fluid controls autoPlay muted width="60%" height="40%"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/5-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/5-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/5-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaAmelieArena">
        <Row className="App-Row" >
          <div id = "hotspot-amalie-arena">
            <h1>Amalie Arena</h1>
            <br />
            <label>
            Amalie Arena, home to the Tampa Bay Lightning, consistently ranks among the very best venues in the United States. It boasts unique features like lightning-throwing Tesla coils and an 11,000 square-foot Bud Light Party Deck with incredible views of the city. 
            </label>
            <a target="_parent" href="http://www.amaliearena.com/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/6-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/6-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/6-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/6-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/6-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaPrivateWaterTaxi">
        <Row className="App-Row" >
          <div id = "hotspot-pirate-water-taxi">
            <h1>Pirate Water Taxi</h1>
            <br />
            <label>
            Downtown’s bright yellow water taxis ferry visitors to destinations all along the Hillsborough River and Garrison Channel, with seventeen stops and a Captain pirate guiding the way it’s a fun way to explore Tampa Bay from the water. A day pass lets visitors hop on and off as they wish and private charters are available.
            </label>
            <a target="_parent" href="http://www.piratewatertaxi.com/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/7-1.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/7-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/7-3.jpeg'} fluid/>
              </Carousel.Item> 
              <Carousel.Item>
                <Image src={'/assets/7-4.jpeg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaTheatre">
        <Row className="App-Row" >
          <div id = "hotspot-tampa-theatre">
            <h1>Tampa Theatre</h1>
            <br />
            <label>
            Built in 1926, the movie palace was Tampa Bay’s first air-conditioned building. Today the theatre is operated as a non-profit company and has a repertoire focused on art-house films and classics. Every show starts with a performance of the Mighty Wurlitzer pipe organ, installed in 1926 and maintained by volunteers. Inside, the theatre still has most of its original furnishings and plasterwork decorations. (Note: iconic features of Tampa Theatre’s interior include the plasterwork grotesques, coats of arms of Queen Isabella of Spain and twinkling stars in the ceiling.)          
            </label>            
            <a target="_parent" href="http://tampatheatre.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item >
                <video autoPlay muted src={'/assets/8-1.mp4'} fluid controls width="60%" height="40%"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/8-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/8-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/8-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/8-5.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/8-6.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaGlazierMuseum">
        <Row className="App-Row" >
          <div id = "hotspot-glazer-children's-museum">
            <h1>Glazer Children’s Museum</h1>
            <br />
            <label>
            Whatever children love to do – dress up, climb high, make art, build things -- this museum on downtown’s central Curtis Hixon Waterfront Park is a trove of kid-friendly treasures. The brightly colored three-story building contains plenty to entertain the elementary school set and educate them at the same time. Lunch is available on site or at several kid-friendly restaurants nearby.            
            </label>            
            <a target="_parent" href="https://glazermuseum.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/9-1.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/9-2.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/9-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/9-4.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/9-5.jpeg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaCurtisHixon">
        <Row className="App-Row" >
          <div id = "hotspot-curtis-hixon-waterfront-park">
            <h1>Curtis Hixon Waterfront Park</h1>
            <br />
            <label>
            Downtown’s 8-acre (3 hectares) public park hosts dozens of events and festivals every year. Its riverfront location provides beautiful views of downtown’s skyline and iconic landmarks like the Tampa Museum of Art, which shimmers with shifting lights at night.
            </label>            
            <a target="_parent" href="https://www.tampagov.net/parks-and-recreation/featured-parks/curtis-hixon" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/10-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/10-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/10-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/10-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/10-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaMuseumOfArt">
        <Row className="App-Row" >
          <div id = "hotspot-tampa-museum-of-art">
            <h1>Tampa Museum of Art</h1>
            <br />
            <label>
            There is no better view of downtown than from the covered plaza in front of the Tampa Museum of Art. Sono Café’s thoroughly modern menu includes many vegetarian options in a setting that inspires, both inside and outside. The museum houses a collection ranging from ancient Greek and Roman to Pop Art legend Roy Lichtenstein. It also hosts many traveling exhibits, recently covering the works of Christo, Andy Warhol, and Normal Rockwell. At night, the museum becomes a work of art itself when its façade comes to life with thousands of shifting colors in Leo Villareal’s “Sky (Tampa).”
            </label>            
            <a target="_parent" href="http://tampamuseum.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item >
                <video autoPlay muted src={'/assets/11-1.mp4'} fluid controls width="60%" height="40%"/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/11-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/11-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/11-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/11-5.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/11-6.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaStrazCenter">
        <Row className="App-Row" >
          <div id = "hotspot-straz-center">
            <h1>David J. Straz, Jr. Center for the Performing Arts</h1>
            <br />
            <label>
            Located on the Tampa Riverwalk, Tampa Bay’s Straz Center is the largest performing arts space south of the Kennedy Center in Washington, D.C. The complex houses five theaters and regularly hosts The Florida Orchestra, Opera Tampa, and an annual Broadway Series. In addition, the Straz is home to Tampa Bay’s local Stageworks theater company. The in-house restaurant, Maestro’s is a great place to grab dinner before a show.
            </label>            
            <a target="_parent" href="http://www.strazcenter.org/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item >
                <video autoPlay muted src={'/assets/12-1.mp4'} fluid controls width="60%" height="40%"/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/12-2.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/12-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/12-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/12-5.jpeg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaArmatureWorks">
        <Row className="App-Row" >
          <div id = "hotspot-armature-works">
            <h1>Armature Works</h1>
            <br />
            <label>
            Housed in a carefully restored former trolley barn, Heights Public Market brings together more than a dozen local restaurants in a carefully curated waterfront food hall. Get your favorite and take it to go for al fresco dining by the sparkling Hillsborough River. After, rent a paddleboard or hop the Pirate Water Taxi for a trip into downtown. Armature Works is a key component of the rebirth of Tampa Heights, the historic neighborhood that surrounds it.
            </label>            
            <a target="_parent" href="http://armatureworks.com/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/13-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/13-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/13-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/13-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/13-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaJulianPark">
        <Row className="App-Row" >
          <div id = "hotspot-julian-lane-riverfront-park">
            <h1>Julian B. Lane Riverfront Park</h1>
            <br />
            <label>
            Located just north of the University of Tampa, this stunning 25-acre park shows Tampa’s incredible waterfront views across the Hillsborough River from the David A. Straz, Jr. Center. Complete with large fields, playgrounds, and a dog park, Julian B. Lane is a great place for a family day out or just a simple walk with friends. 
            </label>            
            <a target="_parent" href="https://www.tampa.gov/parks-and-recreation/featured-parks/riverfrontpark" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/14-1.jpeg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/14-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/14-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/14-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/14-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaHarveySRPark">
        <Row className="App-Row" >
          <div id = "hotspot-perry-harvey-park">
            <h1>Perry Harvey Sr. Park</h1>
            <br />
            <label>
            Dedicated to local Civil Rights leader and labor organizer Perry Harvey Sr., this park commemorates Central Avenue, the former heart of Tampa Bay’s African American community, which grew out of an area known as “The Scrub” first settled by freed slaves after the Civil War. In the first half of the 20th Century, Central Avenue’s nightlife made it a famous stop on the Chittlin’ Circuit for African American entertainers such as Ella Fitzgerald and Cab Calloway. R&B legend Ray Charles got his start here as an 18-year-old, as did saxophonist and Tampa Bay native Cannonball Adderly. The statues at the north end of the part capture “The Twist,” the dance crazy that started on Central Avenue before Chubby Checker made it a national hit.  
            </label>            
            <a target="_parent" href="https://www.tampagov.net/parks-and-recreation/improvements/completed/perry-harvey-sr" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/15-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/15-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/15-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/15-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/15-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaHenryB">
        <Row className="App-Row" >
          <div id = "hotspot-henry-plant-museum">
            <h1>Henry B. Plant Museum</h1>
            <br />
            <label>
            Located in the former Tampa Bay Hotel, the museum is dedicated to 19th Century railroad baron Henry B. Plant, who helped turn Tampa Bay into a hub for commerce and tourism. The museum features a dramatic collection of Gilded Age furnishing, art and other items Plant acquired during trips to Europe as he established his resort hotel.
            </label>            
            <a target="_parent" href="http://www.ut.edu/plantmuseum/" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/16-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/16-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/16-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/16-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/16-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>        
        <Route path="/TampaBayshoreBlvd">
        <Row className="App-Row" >
          <div id = "hotspot-bayshore-boulevard">
            <h1>Bayshore Boulevard</h1>
            <br />
            <label>
            Bayshore Boulevard has long been Tampa Bay’s most glamorous address. The mansions that line the north side of the street enjoy sweeping views of the bay, where pelicans dive for breakfast and dolphins break the surface. Bayshore includes the world’s longest unbroken sidewalk, a 4.5 mile (7 km) stretch that is perfect for biking, walking, or jogging.
            </label>            
            <a target="_parent" href="https://www.tampa.gov/parks-and-recreation/programs/parks-and-facilities/greenways-and-trails/projects-under-development/bayshore-boulevard-greenway" className="App-Link"> More Information
            </a>
            <br />
            <Carousel className="App-Media">
              <Carousel.Item>
                <Image src={'/assets/17-1.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item >
                <Image src={'/assets/17-2.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/17-3.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/17-4.jpg'} fluid/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={'/assets/17-5.jpg'} fluid/>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <br />
        </Route>
        </Switch>
      </Container>
    </div>
    </Router>
  )
}

export default App;
