var wall;
var car;
var deformation;
var speed,weight;

function setup()
{
  
  createCanvas(800,500);
  
  wall = createSprite(750,250,10,500);
  wall.shapeColor = "white";
  car = createSprite(50,250,50,50);
  car.shapeColor = "white";
  car2 = createSprite(50,250,50,50);
  car2.shapeColor = "red";
  car3 = createSprite(50,250,50,50);
  car3.shapeColor = "orange";
  car4 = createSprite(50,250,50,50);
  car4.shapeColor = "green";
  car2.visible = false;
  car3.visible = false;
  car4.visible = false;
}

function draw()
{
  
  background("grey");
  
  deformation = 0.5 * weight * speed * speed/22500
  
  speed = random(55,90);
  weight = random(400,1500);
  car.debug = false;
  
  
  console.log(deformation)
  
  car.velocityX = speed;
  
  if(car.isTouching(wall)){
    car.velocityX = 0;
  }
  
  if(car.velocityX === 0)
    {
      if(deformation > 180)
        {
      car.destroy();
      car2.visible = true;   
    }
      
      if(deformation < 180 || deformation > 80)
        {
           
      car.destroy();
      car3.visible = true;  
    }
      if(deformation < 80)
        {
       car.destroy();
      car4.visible = true;   
      
      
    }
      
    }
  
  drawSprites();
  
}

