module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = getDateAndTime();
        
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

function getDateAndTime() {
        var d = new Date();
        var yr = d.getFullYear();
        var mth = d.getMonth() + 1;
        var day = d.getDate();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return mth + "/" + day + "/" + yr + " " + hr + ":" + min + ":" + sec;
}
