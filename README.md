<h2>Gif Club</h2>
<p>It is a demo giphy website. User can find latest or top rated gif or stiker in here.</p>
<h2>How to run the app</h2>
<ul>
    <li>Download the file as zip & extract it</li>
    <li>Open the folder into any code editor(sublime/vs code/bracket/notepad++). I prefer using Vs Code editor
    </li>
    <li>Open the index.html file into the vs code</li>
    <li>Open the file into your live server & use the app</li>
</ul>
<h2>Live Link: <a href="https://gifyz.netlify.app//" style="font-size: 18px;">Demo</a></h2>
<h2>Technology Used</h2>
<ul>
    <li>Html</li>
    <li>Css</li>
    <li>Css Animation</li>
    <li>Sass</li>
    <li>Bootstrap</li>
    <li>Jquery</li>
    <li>Javascript</li>
    <li>Javascript Api</li>
    <li>Owl Carousel</li>
</ul>
<h2>Features</h2>
<ul>
    <li>Animated Preloader</li>
    <li>Slide Show</li>
    <li>Responsive Layout</li>
    <li>Cross browser compatible design</li>
</ul>
<h2>Future Features</h2>
<ul>
    <li>Pagination will be added</li>
    <li>Preview image sizes will be fixed</li>
    <li>Code will be more optimized</li>
    <li>Design will be updated</li>
</ul>
<h2>Files Used</h2>
<table>
    <tr>
        <th>File Name</th>
        <th>Description</th>
        <th>Location</th>
    </tr>
    <tr>
        <td>style.scss</td>
        <td>For styling the website</td>
        <td>assets/css/style.scss</td>
    </tr>
    <tr>
        <td>app.js</td>
        <td>For rendering data through api</td>
        <td>assets/js/app.js</td>
    </tr>
</table>
<h2>Work Description</h2>
<ul>
    <li>
        <b>Fetch Data:</b> It is an asynchronous function. Async-await library is used to fetch the data
        through
        api. After fetching the data & converted it into json format, it is then sent to renderData() function.
    </li>
    <li>
        <b>Render Data:</b> This function takes two parameters - data, container(where the data should
        be
        rendered into dom).
        At first, the function will check if it's container contains class='row' or not. If yes, then the innerHtml
        will have column div. Otherwise it'll print without column div(for slider). The data array is mapped to get
        each
        data element. After rendering all data it will call owlActivation() function.
    </li>
    <li>
        <b>Search Data:</b> It is an event listener. Each time user writes something to the searchbar & hits
        enter, the value will be added to the url & generates a new api. It will then fetch the data into a new
        division & show the result.
    </li>
    <li>
        <b>Owl Activation:</b> This function takes one parameter - container. At first, it will check
        if
        it's container contains class='owl-carousel' or not. If yes, then it will activate owl carousel plugin to
        that container. Otherwise it will return false.
    </li>
</ul>
<h2>Api Used</h2>
<p>
    Giphy Developers Api
</p>
<h2>Challenges</h2>
<ul>
    <li>Rendering data into carousel</li>
    <li>No preview image</li>
    <li>Different size of preview images break the layout</li>
    <li>Gif's/Stiker's names break the layout</li>
</ul>
<h2>Solutions</h2>
<ul>
    <li>Activate the carousel after rendering data into the element</li>
    <li>Set a height=200px & width=100% for the images</li>
    <li>Set a height for the name div</li>
</ul>
