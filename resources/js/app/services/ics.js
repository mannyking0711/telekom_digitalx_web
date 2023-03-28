// generate string of format yyyyMMddTttttttZ from a date object
export const icsDateTimeString = function (date) {
    if (date instanceof Date === false)  {
        throw new Error('Error: Can only convert Dates to icsDateTimeStrings!');
    }

    return date.toISOString().replaceAll('-', '').replaceAll(':', '').substr(0, 15) + 'Z';
};


// generates the text for a basic ics file based on some properties
export const generateIcsFile = function (title, description, location, start, end) {
    let now = new Date();

    return [
        "BEGIN:VCALENDAR",

        // general info
        "VERSION:2.0",
        "PRODID:http://localhost:8000/de/events/digital-x-2022",
        "METHOD:PUBLISH",

        // event info
        "BEGIN:VEVENT",
        "UID:" + now.getTime() + "@digital-x.eu",
        "SUMMARY:" + title,
        "LOCATION:" + location,
        "DESCRIPTION:" + description,
        "DTSTART:" + icsDateTimeString(start),
        "DTEND:" + icsDateTimeString(end),
        "DTSTAMP:" + icsDateTimeString(now),
        "END:VEVENT",

        "END:VCALENDAR"
    ].join('\r\n');
};


// triggers the download of an ics file by inserting a link into the DOM and clicking on it
export const triggerDownload = function (fileName, fileContent) {
    try {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/calendar;base64,' + btoa(fileContent));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } catch (e) {
        console.log(e);
    }
};
