let x=200,y=350,vr=1;
let d=0,estado=0;
let buttons=[],circulos=[],img=[],obstaculo=[],terrestres=[],music=[],musica=[],videos=[];//arrays
let rolagem;//creditos
let slider,mySelect,slider2,mySelect2;// objetos
let velocidade=1.67; //gravidade
let p1=0,p2=0;
let fruta=5,planeta=15,fase=1,ajuste=0;
let score=0,play=1
let passaro=0,passaro1=0
let pps=0,pps1=0;
let jh=1
let numero1=0,numero2=1;
/*video youtube
https://youtu.be/at_8_pEPscY
codigo do jogo
https://github.com/tonymochila/Cosmic-Collector
link do Jogo:
 https://tonymochila.github.io/Cosmic-Collector/
 link do projeto no colabeduc
 http://www.colabeduc.org/projeto/show/1829
 */
function preload(){
  soundFormats('mp3');
    musica=["midias/audio/music1.mp3","midias/audio/music2.mp3","midias/audio/credit.mp3","midias/audio/gameover.mp3","midias/audio/mario.mp3","midias/audio/click.mp3","midias/audio/moeda.mp3","midias/audio/erro.mp3"]
    music[0]= loadSound(musica[0])
    music[1]= loadSound(musica[1])
    music[2]= loadSound(musica[2])
    music[3]= loadSound(musica[3])
    music[4]= loadSound(musica[4])
    music[5]= loadSound(musica[5])
    music[6]= loadSound(musica[6])
    music[7]= loadSound(musica[7])

img[0]=loadImage('midias/pernonagem/a (17).gif');
img[1]=loadImage('midias/pernonagem/a (18).gif');
img[26]=loadImage('midias/pernonagem/zombie1.gif');
img[27]=loadImage('midias/pernonagem/zombie2.gif');
img[28]=loadImage('midias/pernonagem/Hferro2.gif');
img[29]=loadImage('midias/pernonagem/Hferro1.gif');
img[30]=loadImage('midias/pernonagem/astronauta1.gif');
img[31]=loadImage('midias/pernonagem/astronauta2.gif');
img[32]=loadImage('midias/pernonagem/spadachin2.gif');
img[33]=loadImage('midias/pernonagem/spadachin1.gif');
img[34]=loadImage('midias/pernonagem/zombieG1.gif');
img[35]=loadImage('midias/pernonagem/zombieG2.gif');
img[36]=loadImage('midias/cenario/terra.jpg');
img[3]=loadImage('midias/obstaculos/i (5).gif');
img[21]=loadImage('midias/obstaculos/i (6).gif');
//img[2]=loadImage('midias/img.gif');
img[5]=loadImage('midias/peças/a (1).png');//incio
img[6]=loadImage('midias/peças/a (2).png');
img[7]=loadImage('midias/peças/a (3).png');
img[8]=loadImage('midias/peças/a (4).png');
img[9]=loadImage('midias/peças/a (5).png');
img[10]=loadImage('midias/peças/a (6).png');
img[11]=loadImage('midias/peças/a (7).png');
img[12]=loadImage('midias/peças/a (8).png');
img[13]=loadImage('midias/peças/a (9).png');//fim
//img[14]=loadImage('midias/img12.jpg');//sem uso
img[15]=loadImage('midias/cenario/lua.webp');//inicio
img[16]=loadImage('midias/cenario/terra1.gif');
img[17]=loadImage('midias/cenario/jupiter.jpg');
img[18]=loadImage('midias/cenario/saturno.jpg');
img[19]=loadImage('midias/cenario/vitoria.gif');//fim
img[20]=loadImage('midias/obstaculos/img (3).gif');
img[22]=loadImage('midias/obstaculos/robo3.gif');
img[23]=loadImage('midias/obstaculos/robo.gif');
img[24]=loadImage('midias/obstaculos/img (5).gif');
img[25]=loadImage('midias/obstaculos/img (9).gif');

videos[0]=createVideo('midias/video7.mp4');
videos[1]=createVideo('midias/video5.mp4');
videos[2]=createVideo('midias/controle.mp4');


}

class button{
  constructor(nome,local,callback,color){
    this.nome=createButton(nome);
    this.callback=callback;
    this.button = createButton(nome);
    this.button.position(width -width/5, height / local);
    this.button.size(width/6, height / 12);
    this.color = color;
    this.button.mousePressed(callback);
    this.button.style('background-color', color);
    this.button.style('border', 'none');
    this.button.style('border-radius', '25px');
    
  }
  display() {
    this.button.show(); 
    //this.button.position(width -width/6, height / local);
  }
  hide() {
    this.button.hide();
  }
}
class Circulo {
  
  constructor() {
    
    this.x = random(width-width/10);  // Posição horizontal aleatória
    this.y = 0;              // Começa no topo da tela
    this.size = random(50, 100);  // Tamanho aleatório
    this.speed = velocidade/2.5   // Velocidade aleatória
    this.foto = fruta++;
    if(fruta>=13){
      fruta=5
    }
   
  }

  // Desenha o círculo
  draw() {
  //  push(); // Salva o estado de transformação atual
 // translate(this.x + this.size / 2, this.y + this.size / 2); // Move o ponto de origem para o centro do objeto
 // rotate(this.rotation); // Aplica a rotação
  //imageMode(CENTER); // Desenha a imagem com o centro como referência
  //image(img[this.foto], 0, 0, this.size, this.size); // Desenha a imagem
  image(img[this.foto],this.x, this.y, this.size, this.size);
  //pop(); // Restaura o estado de transformação
  }

  // Atualiza a posição do círculo
  update() {
    this.y += this.speed;
  //  this.rotation += this.rotationSpeed; // Atualiza a rotação
  }

  // Verifica se o círculo saiu da tela
  isOffScreen() {
    return this.y > height;
  }

  // Verifica se o mouse está sobre o círculo
  isMouseOver(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.size;
    
  }
}
class obstaculos{
  constructor(){
    passaro++
  this.foto=21;
  this.foto1=20;
  this.x = 0;
  this.x1 = width;
  this.y=random(height/6,height)
  this.size = height/10  // Tamanho aleatório
  this.speed = velocidade/2.5  // Velocidade aleatória
  if(passaro>=2){
    this.speed=-velocidade/2.5;
    this.x = width;
    this.foto = 24
    passaro=0
  }
  
 
  }
  draw() {
    image(img[this.foto],this.x, this.y, this.size, this.size);
  }
  update() {
    this.x += this.speed ;  // Faz o círculo cair
  }

  // Verifica se o círculo saiu da tela
  isOffScreen() {
    return this.x > width;
  }
 
}
class terrestre{
  
  constructor(){
    passaro1++
  this.foto=22
  this.foto1=20;
  this.x = 0;
  this.y=height-height/10
  this.size = height/10  // Tamanho aleatório
  this.speed = velocidade/2.5   // Velocidade aleatória
  if(passaro1>=2){
    this.speed=-velocidade/2.5;
    this.x = width;
    this.foto = 23
    passaro1=0
  }
 
  }
  draw() {
    image(img[this.foto],this.x, this.y, this.size, this.size);
  }
  update() {
    this.x += this.speed;  // Faz o círculo cair
  }

  // Verifica se o círculo saiu da tela
  isOffScreen() {
    return this.x > width;
  }
 
}
function setup() {
  videos[1].loop();
  videos[0].loop()
  videos[1].hide();
  videos[0].hide();
  videos[2].loop()
  videos[2].hide();
  
  rolagem=height-height/100;
  createCanvas(windowWidth, windowHeight); // Cria o canvas com o tamanho da janela
  //objetos da area do menu
  buttons.push(new button("Iniciar jogo",3,jogo,'#00FA9A'))
  buttons.push(new button("Tutorial",2.3,tutorial,'#DAA520'))
  buttons.push(new button("Opções",1.85,config,'#8A2BE2'))
  buttons.push(new button("Creditos",1.55,creditos,'#FFFF00'))
//objetos da area de configurações
  slider = createSlider(0, 1, 1, 0.01);
  slider2 = createSlider(0, 5, 1, 0.01);
  mySelect = createSelect();
  mySelect2 = createSelect();
  volta = createButton('Volta/Menu'); 
  pausa = createButton('pausa'); 
  //criação seleto de dificuldade
    mySelect.option('Lua');
    mySelect.option('Terra');
    mySelect.option('Saturno');
    mySelect.option('Jupiter');
    mySelect.changed(selecaoAlterada);
    mySelect2.option('Mario');
    mySelect2.option('astronauta');
    mySelect2.option('zombie');
    mySelect2.option('Homen de ferro');
    mySelect2.option('espadachin');
    mySelect2.option('zombie jogador');
    mySelect2.changed(pessoa);
    mySelect2.hide();mySelect.hide(); volta.hide(); slider.hide();pausa.hide(); //invisivel

    pausa.style('background-color', '#8A2BE2',);
    pausa.style('border', 'none');
    pausa.style('border-radius', '25px');
}
function musicas(faixa,pp){
  if(faixa==0 && pps!=pp){
    stopMusica();
    music[0].loop();
    pps=pp;
  }
  else if(faixa==1 && pps!=pp){
    stopMusica();
    music[1].loop();
    music[5].play();
    pps=pp;
  }
  else if(faixa==2 && pps!=pp){
    stopMusica();
    music[2].loop();
    music[5].play();
    pps=pp;
  }
  else if(faixa==3 && pps!=pp){
    stopMusica();
    music[3].play();
    pps=pp;
  }
  else if(faixa==4 && pps!=pp){
    stopMusica();
    music[4].loop();
    music[5].play();
    pps=pp;
  }
  else if(faixa==0 && pp==0){
    stopMusica();
  }
  function stopMusica(){
    for(let i=0;i<=7;i++){
      music[i].stop();
    }
  }
  
}
function draw() {
  image(videos[1], 0, 0, width, height);
  textSize(60);
  fill(255)
  textAlign(CENTER, TOP);
  text("Cosmic Collector",0,height/10,width,height)
  switch(estado){   
    case 0:
      musicas(0,1)
      for(let n of buttons){
        n.display();
    }
    break;
    case 1:
      jogo();
    
    break;
    case 2:
      tutorial();
      musicas(4,5)
    break;
    case 3:
      config();
    break;
    case 4:
      creditos();
      musicas(2,3)
     break;
  }
  if(estado>0){
    for(let n of buttons){
      n.hide();
    }
  }
 
}
function jogo(){
  checar();
  function checar() {
    for (let i = 0; i < circulos.length; i++) {
      if (circulos[i].isMouseOver(x, y)) {
        console.log("Você acertou!");
        score++
         circulos.splice(i, 1);
      }
    }
  }
  estado=1;
  pausa.show();
  pausa.position(width/1.2, height/8);
  pausa.mousePressed(para)
  fill(255)
  textSize(20);
  
  function para(){
    music[5].play();
    if (play === 1) {
      pausa.html('Continuar')
      play=0
      text("jogo pausado ", windowWidth/2, windowWidth/2,200,200);
    volta.position(width/3, height/2);
    volta.show()
    volta.mousePressed(sair);
    } else {
      pausa.html('pausa')
      volta.hide();
      play=1
    }
  }
  if(play==3){
    vitoria();
  }
  if(score>=0 && play==1){
  musicas(1,2)
  image(img[planeta],0,0,windowWidth, windowHeight)
  text("Score "+score,width/15,height/11);
  movimento();
  bolinha();
 
  if(score>=10){
    for (let i = circulos.length - 1; i >= 0; i--) {
      circulos.splice(i, 1);
    }
    fase++
    if(fase>4){
      vitoria();
      fase=1;
      play=3
      
    }
    selecaoAlterada(fase,2)
    score=0  
  }
}
  else if(score<0){
    jh=1
    fase=1; selecaoAlterada(fase)
    pausa.hide(); volta.hide();
    background(0);
    fill(255);
    noStroke()
    textSize(16);
    textAlign(CENTER, CENTER);
    text("fim de jogo ", width/2,height/2);
    textSize(8);
    musicas(3,4)
    text("Precione qualquer tecla para sair ", width/2,height/10);
    for (let i = circulos.length - 1; i >= 0; i--) {
      circulos.splice(i, 1);
    }
    if(keyIsPressed==true){
      estado=0
      score=0
    }
  }

  function movimento(){
    let d1;
    if(x>=width-windowWidth/10){
      
      x=windowWidth-windowWidth/10
    }
    if(x<0){
      x=0
    }
    gravidade()
      if(mouseX>width/2){
        x+=(velocidade/2)+ajuste;
       // y=height-windowWidth/10
        image(img[numero1],x,y,windowWidth/10,windowWidth/10)
      }
       if(mouseX<width/2){
        x-=(velocidade/2)+ajuste;
       // y=height-windowWidth/10
        image(img[numero2],x,y,windowWidth/10,windowWidth/10)
      }
       if(mouseIsPressed){
      gravidade()
      } 
    function gravidade(){
        y=y-vr;
        if(y<height/1.8|| mouseIsPressed==false){
          vr=-(velocidade/2+ajuste);
        }
        if(y>height-windowWidth/10){
          y=height-windowWidth/10
          vr=(velocidade/2+ajuste);
        }
    }
  }
 abertura(fase)

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Redimensiona o canvas ao tamanho da janela
}
function tutorial(){
  textSize(20);
estado=2;
textAlign(CENTER,TOP)

image(videos[2], 0, 0, width, height);
text("click em qualquer tecla para sair do tutorial",width/2, height/10)
if (keyIsPressed){
  sair();
}
}
function config(){
  fill (50,100,200)
  image(img[36],0,0,windowWidth, windowHeight)
  estado=3
  mySelect.show()
  mySelect2.show()
  volta.show()
  slider.show();slider2.show()

  noStroke()
  textSize(width/35)
  text("Ajustar volume:",width/10,height/11);
  slider.position(width/3, height/15.8);
  slider.size(width/2);
  for(let i=0;i<=6;i++){
    music[i].setVolume(slider.value());
  }
  text("Local do jogo:",width/10,height/5);
  mySelect.position(width/3, height/5.4);
  text("Semsibilidade:",width/10,height/3.5);
  slider2.position(width/3, height/3.8);
  ajuste=slider2.value()
  slider2.size(width/2);
  text("Personagem:",width/10,height/3);
  mySelect2.position(width/3, height/3.2);
  volta.center('horizontal');
  volta.position(width/2, height/1.5);
  volta.mousePressed(sair);
}
function creditos(){
  estado=4;
    image(videos[0], 0, 0, width, height);
    fill(255);
    noStroke()
    textSize(16);
    textAlign(CENTER, TOP);
    var credits = `
  
   Cosmic Collector
  
  Desenvolvido por:
  Antonio Tavares do Nascimento
  
  Instituição
  Universidade Federal do Rio Grande do Norte (UFRN)
  
  Agradecimentos Especiais:
  Professores e colegas da UFRN pelo apoio e feedback.
  Comunidade de desenvolvedores P5.js por suas contribuições e tutoriais.
  Família e amigos pelo suporte contínuo durante o desenvolvimento do projeto.
  
  Recursos Utilizados:
   P5.js: Biblioteca de JavaScript para criação de gráficos e animações, que permitiu a construção das funcionalidades visuais e interativas do jogo.
   Visual Studio Code: Editor de código que proporcionou um ambiente de desenvolvimento eficiente e organizado.
   Gráficos e Sons: Recursos próprios e livres de direitos autorais encontrados na internet, garantindo uma experiência visual e auditiva envolvente.
  
  Cosmic Collector foi inspirado pelos clássicos jogos de arcade que combinam simplicidade e diversão. O objetivo principal é proporcionar uma experiência de jogo casual, mas envolvente, onde os jogadores devem capturar peças cósmicas que caem do topo da tela. À medida que o jogador avança pelos diferentes planetas, a velocidade e o comportamento das peças mudam, desafiando tanto a habilidade quanto os reflexos dos jogadores.

Desafios e Aprendizado:

Durante o desenvolvimento do Cosmic Collector, diversos desafios foram enfrentados e superados:

Implementação de Física e Animações: Criar uma física de queda realista para as peças cósmicas, levando em consideração a gravidade única de cada planeta, e desenvolver animações fluidas que enriquecem a experiência de jogo.

Gerenciamento de Recursos de Áudio: Integração de sons que se adaptam ao estado do jogo, como música de fundo imersiva e efeitos sonoros de captura das peças.

Otimização do Desempenho: Garantir que o jogo rodasse de maneira suave em diferentes dispositivos e tamanhos de tela, mantendo uma experiência de jogo consistente e agradável em qualquer plataforma.


  Testadores Beta:
   Antonio Tavares do Nascimento
  
  Os testadores beta desempenharam um papel crucial na identificação de bugs e na sugestão de melhorias, garantindo que a versão final do jogo oferecesse uma experiência refinada e sem falhas.
  
  Contatos:
   Email: antonio21tdn@gmail.com
   Whatsapp: [+55 084 991865261]
  
  Direitos Autorais:
  © 2024 Antonio Tavares do Nascimento. Todos os direitos reservados.
  
  Mensagem Final:
  Desenvolver "Fruit Drop" foi uma jornada repleta de aprendizado e crescimento. Espero que você aproveite jogando tanto quanto eu aproveitei criando. Agradeço a todos que contribuíram de alguma forma para a realização deste projeto.
  
    `;
    text(credits, width / 15, rolagem,width - 100);
    rolagem--;
    if(rolagem< -height*3 ){
      sair();
    }
    volta.position(width-width/6+5, height/10);
    volta.mousePressed(sair);
    volta.show();
  }

  function selecaoAlterada(nivel) {
    let dificuldade = mySelect.value();
     if (dificuldade =='Lua'|| nivel==1) {
             velocidade = 1.67;
             planeta=15
     }
     if (dificuldade =='Terra'|| nivel==2) {
      velocidade = 9.8;
      planeta=16
}
if (dificuldade =='Saturno'|| nivel==3) {
  velocidade = 10.5;
    planeta=17
}
if (dificuldade =='Jupiter'|| nivel==4) {
  velocidade = 24.8;
   planeta=18
            
}

 }
 function sair(){
  score=0;
  pausa.html('pausa')
  jh=1
  music[5].play();
  rolagem=width;
      estado=0;
  estado=0; play=1
  mySelect.hide();mySelect2.hide()
  volta.hide(); pausa.hide();
  slider.hide(); slider2.hide();
  for (let i = circulos.length - 1; i >= 0; i--) {
    circulos.splice(i, 1);
  }
}
function vitoria(){
  pausa.hide();
  image(img[19],0,0,windowWidth, windowHeight);
  textAlign(CENTER, TOP);
  text("click em qualquer lugar para sair ",width/2,height/12);
  if(mouseIsPressed==true){
    jh=1
    sair();
  }
}

function bolinha(){
  if (frameCount % 60 === 0) {
    circulos.push(new Circulo());
  }
  if (frameCount % 500 === 0) {
    obstaculo.push(new obstaculos());
  }
  if (frameCount % 1000 === 0) {
   // obstaculo.push(new obstaculos());
    terrestres.push(new terrestre());
  }
  // Atualiza e desenha todos os círculos
  for (let i = circulos.length - 1; i >= 0; i--) {
    circulos[i].update();
    circulos[i].draw();

    // Remove o círculo da lista se ele sair da tela
    if (circulos[i].isOffScreen()) {
      circulos.splice(i, 1);
      score--
    }
  }
  for (let i = obstaculo.length - 1; i >= 0; i--) {
    obstaculo[i].update();
    obstaculo[i].draw();

    // Remove o círculo da lista se ele sair da tela
    if (obstaculo[i].isOffScreen()) {
      obstaculo.splice(i, 1);
    }
   
  }
  for (let i = terrestres.length - 1; i >= 0; i--) {
    terrestres[i].update();
    terrestres[i].draw();

    // Remove o círculo da lista se ele sair da tela
    if (terrestres[i].isOffScreen()) {
      terrestres.splice(i, 1);
    }
   
  }
 }
 function pessoa(){
  let personagem = mySelect2.value();
  switch(personagem){
    case 'mario':
      numero1=1
      numero2=0
    break;
    case 'zombie':
      numero1=26
      numero2=27
    break;
    case 'astronauta':
      numero1=30
      numero2=31
    break;
    case 'Homen de ferro':
      numero1=28
      numero2=29
    break;
    case 'espadachin':
      numero1=32
      numero2=33
    break;
    case 'zombie jogador':
      numero1=34
      numero2=35
    break;
    
  }
     
 }
 function abertura(faixa){
  if(jh==faixa && score>=0 ){
    background(0)
    pausa.hide();
    fill(255)
    function imprimir(k1,k2){
      textSize(60);
      textAlign(CENTER,TOP);
      text(k2,0,0,width,height)
      textSize(25);
      textAlign(CENTER,CENTER);
      text(k1,0,0,width,height)
      textAlign(CENTER,BOTTOM);
      textSize(10);
      text("click em qualquer tecla para avançar",0,0,width,height)
    }
    switch(faixa){
      case 1:
        imprimir("Bem-vindo à Lua, nosso único satélite natural! A gravidade aqui é bem mais fraca do que na Terra, apenas 1/6 da força gravitacional terrestre. Isso significa que tudo por aqui parece pesar menos e flutuar mais. Use isso a seu favor para coletar as peças, mas cuidado, pois a baixa gravidade pode tornar os movimentos mais lentos e difíceis de controlar.","Lua")
      break;
      case 2:
        imprimir("Você chegou à Terra, o lar dos humanos e o terceiro corpo celeste a partir do Sol. Embora a Terra não seja tecnicamente um planeta nesta jornada, sua gravidade é a referência para todos os outros corpos celestes. Aqui, a gravidade é exatamente o que você está acostumado: forte o suficiente para mantê-lo firme no solo, mas ainda assim, permite movimentos ágeis e precisos. Prepare-se para a próxima fase em um ambiente mais desafiador!","Terra")
      break;
      case 3:
        imprimir("Bem-vindo a Saturno, o gigante gasoso famoso por seus impressionantes anéis! Saturno é um planeta enorme, mas sua gravidade é apenas ligeiramente superior à da Terra. Por ser um gigante gasoso, a superfície sólida é inexistente, então aqui, você se moverá em uma atmosfera densa e peculiar, onde a gravidade ainda o puxa para o centro, mas de maneira mais suave. Fique atento às mudanças sutis enquanto coleta as peças!","Saturno")
      break;
      case 4:
        imprimir("Você chegou a Júpiter, o maior planeta do Sistema Solar! A gravidade aqui é esmagadora, mais de duas vezes e meia a força gravitacional da Terra. Cada movimento aqui exige esforço extra, e as peças cairão rapidamente sob a influência dessa poderosa gravidade. Este é o desafio final - prove sua habilidade em um ambiente onde cada segundo conta!","Júpiter")
      break;
    }
    if(keyIsPressed){
  jh=faixa+1
    }
    else{
        for (let i = circulos.length - 1; i >= 0; i--) {
          circulos.splice(i, 1);
        }
    } 
  }   
}