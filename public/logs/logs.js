getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const manholenumber = document.createElement('div');
    const materialpipe = document.createElement('div');
    const materialbricks = document.createElement('div');
    const materialcement = document.createElement('div');
    const materialpipere = document.createElement('div');
    const materialbricksre = document.createElement('div');
    const materialcementre = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    //const image = document.createElement('img');
    const pipeimage = document.createElement('img');
    const bricksimage = document.createElement('img');
    const cementimage = document.createElement('img');
    const manholetype = document.createElement('div');
    const manholedepth = document.createElement('div');
    const stageofprogress = document.createElement('div');
    const linenumber = document.createElement('div');
    const typeofline = document.createElement('div');
    const linelength = document.createElement('div');
    const linedepth = document.createElement('div');
    const lineprogress = document.createElement('div');
    const labourid = document.createElement('div');
    const pipeimagere = document.createElement('img');
    const bricksimagere = document.createElement('img');
    const cementimagere = document.createElement('img');
    const stageofprogressimg = document.createElement('img');
    const lineprogressimg = document.createElement('img');

    manholenumber.textContent = `Manhole number: ${item.manholenumber}`;
    manholetype.textContent = `Manhole Type: ${item.manholetype}`;
    manholedepth.textContent = `Manhole Depth: ${item.manholedepth} m`;
    stageofprogress.textContent = `Stage Of Progress: ${item.stageofprogress}`;
    linenumber.textContent = `Line Number: ${item.linenumber}`;
    typeofline.textContent = `Type Of Line: ${item.typeofline}`;
    linelength.textContent = `Line Length: ${item.linelength} m`;
    linedepth.textContent = `Line Depth: ${item.linedepth} m`;
    lineprogress.textContent = `Line Progress: ${item.lineprogress}`;
    labourid.textContent = `Labour ID: ${item.labourid}`;
    materialpipe.textContent = `No of Pipes: ${item.noofpipe}`;
    materialbricks.textContent = `No of Bricks: ${item.noofbricks}`;
    materialcement.textContent = `No of Cement bags: ${item.noofcement}`;
    materialpipere.textContent = `No of Pipes returned: ${item.noofpipere}`;
    materialbricksre.textContent = `No of Bricks returned: ${item.noofbricksre}`;
    materialcementre.textContent = `No of Cement bags returned: ${item.noofcementre}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    // image.src = item.image64;
    // image.alt = 'photo not clear';
    pipeimage.src = item.pimr;
    pipeimage.alt = 'pipe photo not clear';
    bricksimage.src = item.bimr;
    bricksimage.alt = 'bricks photo not clear';
    cementimage.src = item.cimr;
    cementimage.alt = ' cement photo not clear';
    pipeimagere.src = item.pimrre;
    pipeimagere.alt = 'pipe returned photo not clear';
    bricksimagere.src = item.bimrre;
    bricksimagere.alt = 'bricks returned photo not clear';
    cementimagere.src = item.cimrre;
    cementimagere.alt = 'cement returned photo not clear';
    stageofprogressimg.src = item.mimr;
    stageofprogressimg.alt = 'stage of progress photo not clear';
    lineprogressimg.src = item.limr;
    lineprogressimg.alt = 'line progress photo not clear';

    root.append( geo, date, manholenumber,materialpipe,pipeimage,materialbricks,bricksimage,materialcement,cementimage,manholetype,manholedepth,stageofprogress,stageofprogressimg,linenumber,typeofline,linelength,linedepth,lineprogress,lineprogressimg,labourid,materialpipere,pipeimagere,materialbricksre,bricksimagere,materialcementre,cementimagere);
    document.body.append(root);
  }
  console.log(data);
}
