function loadFile(event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
}

async function handle(event) {
    console.log("an image has arrived");
    $('#emotion').html("Loading....");
    event.preventDefault();     // stops the page from reloading

    var myForm = document.getElementById('image-form');
    var payload = new FormData(myForm);

    var functionUrl = "https://week2app.azurewebsites.net/api/AnalyzeBeard?code=ZyZFHN7cuX8Oq6faNHAznLGTsGjxa3Zz95lstz8WjNPkSoa064hQpA=="

    // fetch returns a promise
    const resp = await fetch(functionUrl, {
        method: 'POST',
        body: payload
    });

    var data = await resp.json();

    // grab information from FaceAPI 
    var emotion = data.result[0].faceAttributes.emotion;

    var resultString = `
    <h3> Emotions in the image: </h3><br />
    <p> anger: ${emotion.anger}</p>
    <p> contempt: ${emotion.contempt}</p>
    <p> disgust: ${emotion.disgust}</p>
    <p> fear: ${emotion.fear}</p>
    <p> happiness: ${emotion.happiness}</p>
    <p> neutral: ${emotion.neutral}</p>
    <p> sadness: ${emotion.sadness}</p>
    <p> suprise: ${emotion.suprise}</p>
    `; 

    $('#emotion').html(resultString);
}