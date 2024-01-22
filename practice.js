//create a web page with "HELLO JAVASCRIPT" and append with "from apna college".
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB PAGE</title>
</head>
<body>
    <h1>HELLO JAVASCRIPT</h1>
    <script>
        let heading=document.querySelector("h1");
        console.dir(heading.innerText);
        heading.innerText=heading.innerText + "\nfrom APNA COLLEGE STUDENTS";
    </script>
</body>
</html>
