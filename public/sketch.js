function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(160, 120);
  let lat, lon;
  let pimr,bimr,cimr,pimrre,bimrre,cimrre,mimr,limr
  const button = document.getElementById('submit');
  const pipephoto = document.getElementById('pipephoto');
  const pipephotoimg = document.getElementById('pipephotoim')
  const cementphoto = document.getElementById('cementphoto');
  const cementphotoimg = document.getElementById('cementphotoim')
  const bricksphoto = document.getElementById('bricksphoto');
  const bricksphotoimg = document.getElementById('bricksphotoim')
  const pipephotore = document.getElementById('pipephotore');
  const pipephotoimgre = document.getElementById('pipephotoimre')
  const cementphotore = document.getElementById('cementphotore');
  const cementphotoimgre = document.getElementById('cementphotoimre')
  const bricksphotore = document.getElementById('bricksphotore');
  const bricksphotoimgre = document.getElementById('bricksphotoimre')
  const manholeprogphoto = document.getElementById('manholeprogphoto');
  const manholeprogim = document.getElementById('manholeprogim')
  const lineprogphoto = document.getElementById('lineprogphoto');
  const lineprogim = document.getElementById('lineprogim')
  
  pipephoto.addEventListener('click', async event => {
    video.loadPixels();
    const pipe64 = video.canvas.toDataURL();
    pipephotoimg.src=pipe64
    pimr=pipe64

  });
  bricksphoto.addEventListener('click', async event => {
    video.loadPixels();
    const bricks64 = video.canvas.toDataURL();
    bricksphotoimg.src=bricks64
    bimr=bricks64
  
  });
  cementphoto.addEventListener('click', async event => {
    video.loadPixels();
    const cement64 = video.canvas.toDataURL();
    cementphotoimg.src=cement64
    cimr=cement64

  });

  pipephotore.addEventListener('click', async event => {
    video.loadPixels();
    const pipe64re = video.canvas.toDataURL();
    pipephotoimgre.src=pipe64re
    pimrre=pipe64re

  });
  bricksphotore.addEventListener('click', async event => {
    video.loadPixels();
    const bricks64re = video.canvas.toDataURL();
    bricksphotoimgre.src=bricks64re
    bimrre=bricks64re
  
  });
  cementphotore.addEventListener('click', async event => {
    video.loadPixels();
    const cement64re = video.canvas.toDataURL();
    cementphotoimgre.src=cement64re
    cimrre=cement64re

  });
  manholeprogphoto.addEventListener('click', async event => {
    video.loadPixels();
    const manholeprog64 = video.canvas.toDataURL();
    manholeprogim.src=manholeprog64
    mimr=manholeprog64

  });
  lineprogphoto.addEventListener('click', async event => {
    video.loadPixels();
    const lineprog64 = video.canvas.toDataURL();
    lineprogim.src=lineprog64
    limr=lineprog64

  });
  
  
    
  
  button.addEventListener('submit', async event => {
    const noofpipe = document.getElementById('pipes acquired').value;
    const noofbricks = document.getElementById('bricks acquired').value;
    const noofcement = document.getElementById('cement acquired').value;
    const manholenumber = document.getElementById('manhole number').value;
    const manholetype = document.getElementById('Manhole_Type').value;
    const manholedepth = document.getElementById('Manhole_Depth').value;
    const stageofprogress = document.getElementById('Manhole_progress').value;
    const linenumber = document.getElementById('line_number').value;
    const typeofline = document.getElementById('Type_of_line').value;
    const linelength = document.getElementById('Length').value;
    const linedepth = document.getElementById('Depth').value;
    const lineprogress = document.getElementById('Line_Progress').value;
    const labourid = document.getElementById('Labour Id').value;
    const noofpipere = document.getElementById('pipes returned').value;
    const noofbricksre = document.getElementById('bricks returned').value;
    const noofcementre = document.getElementById('cement returned').value;
   
    const data = { lat, lon, manholenumber,noofpipe,noofbricks,noofcement,pimr,bimr,cimr,manholetype,manholedepth,stageofprogress,linenumber,typeofline,linelength,linedepth,lineprogress,labourid,noofpipere,noofbricksre,noofcementre,pimrre,bimrre,cimrre,mimr,limr};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });

  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;
    });
  } else {
    console.log('geolocation not available');
  }

}