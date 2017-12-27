var jobs = [];
function populateJobs(){

  jobs.forEach((e,i) => {
    var container = (i % 2 == 0) ? $('<div>',{ class: 'job job-right animated slideInRight', id: e.id}) : $('<div>',{ class: 'job job-left animated slideInLeft', id: e.id});

    var company = $('<h3>',{style: 'font-weight: bold;',  html: e.company });
    var subtitle = $('<h4>',{ html: e.subtitle });
    var calendar = '<i class="fa fa-calendar" aria-hidden="true"></i> ';
    var datas = $('<p>',{ html: calendar + e.dateBegin +' - '+ e.dateEnd });
    var map = '<i class="fa fa-map-marker" aria-hidden="true"></i> ';
    var location = $('<p>',{ html: map + e.location });
    var description = $('<p>',{ style: 'margin-top: 20px;', html: e.description });
    var tasks =  $('<ul>');
    e.tasks.forEach((task) => {var currTask = $('<li>',{ html: task }); tasks.append(currTask);});

    container.append(company,subtitle,datas,location,description, tasks);
    $('#jobs').append(container);
    //container.animate({left: '250px'});
  });

}

var open = {
  company: 'Open System',
  subtitle: 'Software development internship',
  dateBegin: 'Jun 2017',
  dateEnd: 'ongoing',
  location: 'Salvador, BA',
  description: 'Here I helped to develop great solutions to clients, and to keep and raise the name of a company that has more than 25 years in the market providing integrated mobile solutions for big retail companies.',
  tasks: ['Modeling the database using SQL Server and Code-first Migrations','ASP.NET MVC development and multi-layer architecture','Front-end design using variable plugins in JavaScript, CSS and Bootstrap, etc','Developed WebAPI to provide data to mobile devices connected and receive information from other APIs','Full-stack development for mobile devices (android) using Xamarin']
  // 'Initial development of big international, multi-language web-system, with mobile interface (C# Asp.Net MVC5 Xamarin SQLServer)'
};
jobs.push(open);

var viva = {
  company: 'Viva inovação',
  subtitle: 'Software development internship',
  dateBegin: 'Mar 2017',
  dateEnd: 'Jun 2017',
  location: 'Salvador, BA',
  description: 'Viva Inovação is a startup company that develops technology solutions focused on increasing productivity.',
  tasks: ['Learned basics MVC architecture and front-end developing using Razor, jQuery, Bootstrap, etc','Back-end development using C# with ASP.NET and PHP with Yii framework','Talked directly to costumers and provided support','Managed deployments and maintenance on server applicatications']
  // 'Great progress in a major project inside the company (C# Asp.Net MVC5 SQLServer)','Maintenance in PHP Yii framework project (MySQL PhpMyAdmin)'
};
jobs.push(viva);

var maquete = {
  company: 'Ufba',
  subtitle: 'Game development internship',
  dateBegin: 'Mar 2016',
  dateEnd: 'Mar 2017',
  location: 'Salvador, BA',
  description: 'Multi-subject Federal University project',
  tasks: ['From ground zero made an entire virtual world of my University Campus, including terrain, buildings, streets and main architecture characteristics','Participants from different areas of knowledge, like: arts, architecture, computer science','Used Sketchup 3D to convert the work done by architecture students to models that could be used in the Unity 3D platform','Used terrain plugins to create roads and adapt the terrain imported from the city database to the new building that were being put \'on top of it\'','Developed my C# skills with scripts to control the user inputs and animations around the Campus']
};
jobs.push(maquete);
