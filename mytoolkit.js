// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        
        var rect = draw.rect(100,50).fill('#FFCCF7')

        var label = draw.text('Button')
        .font({size: 16, family: 'Helvetica'});
        
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null
        
        rect.mouseover(function(){
            this.fill({ color: '#FF66E8'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: '#FFCCF7'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        rect.mouseup(function(){
            this.fill({ color: '#FFCCF7'})
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        rect.click(function(event){
            this.fill({ color: '#CC00AE'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
                label.move(x+20,y+15);
            },
            setText: function(text){
                label.text(text);
                rect.size(40+label.length(),50)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    var CheckBox = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(40);
        
        var rect = draw.rect(15,15).fill('none').stroke({ width: 2, color: '#B20098' })     

        var label = draw.text('Check Box Label')
        .font({size: 16, family: 'Helvetica'}).fill("#B20098");

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'white'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: 'white'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        rect.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        rect.click(function(event){
            var text = draw.text('✓').fill("#E500C4")
            .font({size: 17, family: 'Helvetica', weight: "bold"})
            .move(rect.x()+1, rect.y()-1.5);
            text.click(function(event){
                text.remove();
                if(clickEvent != null)
                clickEvent(event)
            })
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
                label.move(x+20,y-1)
            },
            setText: function(text){
                label.text(text);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    var RadioButton = function(radioButtons){
        var draw = SVG().addTo('body').size('100%','100%').height(radioButtons.length*40);
        var frame = draw.group()
        var y = 0;
        var btns = new Array();
        for (var i = 0; i < radioButtons.length; i++){
            y+=40
            var circle = draw.circle(15).fill('white').stroke({ color:"#B20098", width: 2}).move(0, y+1);
            var txt = draw.text(radioButtons[i][0]).move(25,y).font({size: 16, family: 'Helvetica'}).fill("#B20098");
            if (radioButtons[i][1] == true){
                var toggle = draw.circle(11).fill('#B20098').move(2, y+3);
                toggle.hide()
            }
            btns.push(circle);
            frame.add(circle);
            frame.add(txt);
            frame.add(toggle);
        }

        var clickEvent = null
        btns.map(e => e.node.addEventListener("click", function(){ 
            toggle.show();
            toggle.move(e.x()+2, e.y()+2);
        }));

        frame.click(function(event){
            if(clickEvent != null)
                console.log("Checked State Changed")
                clickEvent(event)
        })
        return{
            move: function(x, y) {
                frame.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
    var TextBox = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        var frame = draw.group();
        frame.rect(400,30).stroke("#B20098").fill("White")

        var eventNum = [13, 16, 17, 18, 33, 34,35,36, 37, 45, 174, 175, 176, 177, 178]
        
        var text = frame.text("").move(10,0)
        
        var caret = frame.rect(1.5,15)
        
        var runner = caret.animate().width(0);
        runner.loop(1000,1,0);

        caret.hide()
        var pass = false;

        SVG.on(window,'keyup',(event)=>{
            console.log(event.keyCode);
            if(eventNum.includes(event.keyCode)){
                pass = true;
                console.log("Pass");
            }
            else if (event.keyCode == 8){
                console.log(text.text());
                text.text(text.text().substring(0, text.text().length-1));
                caret.move((frame.x()+16+text.length())-5,caret.y());
                console.log("Text Has Change")
                console.log(event)
            }
            else if(text.length()<375 && pass == false){
                text.text(text.text()+event.key)
                caret.x(text.length()+(frame.x()+10)) 
                console.log("Text Has Change")
                console.log(event)
            }  
            pass = false;
        })
        frame.move(10,10)

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        frame.mouseover(function(){
            caret.show()
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        frame.mouseout(function(){
            caret.hide()
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        frame.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        frame.click(function(event){
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                frame.move(x, y);
                caret.move(frame.x()+10,frame.y()+7)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    var ScrollBar = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var frame = draw.group();
        frame.rect(20,300).fill('none').stroke({ width: 1, color: '#B20098' })
        frame.click(function(event){
            console.log("Window")
            console.log(event)
        })
        var thumb = draw.rect(17, 50).fill('#FF66E8')
        thumb.radius(10)
        
        var up = draw.text('▲')
        .font({size: 17, family: 'Helvetica', weight: "bold"}).fill("#FF66E8")
        var down = draw.text('▼')
        .font({size: 17, family: 'Helvetica', weight: "bold"}).fill("#FF66E8")

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        thumb.mouseover(function(){
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        thumb.mouseout(function(){
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        thumb.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        thumb.click(function(event){
                if(clickEvent != null)
                    clickEvent(event)
        })
        up.click(function(event){
            if(thumb.y()-30>frame.y()){
                thumb.move(thumb.x(),thumb.y()-10)
            }
                if(clickEvent != null)
                    clickEvent(event)
                    console.log("scroll thumb has moved up")
        })
        down.click(function(event){
            if(thumb.y()<frame.height()-78){
                thumb.move(thumb.x(),thumb.y()+10)
            }
                if(clickEvent != null)
                    clickEvent(event)
                    console.log("scroll thumb has moved down")
        })
        thumb.mousedown(function(){
            SVG.on(thumb,'mousemove',(event)=>{
                if(thumb.y()<frame.height()-78){
                    thumb.move(thumb.x(),event.offsetY)
                    console.log(event)
                    console.log(event.offsetY)                
                }
            })
        })
        return {
            move: function(x, y) {
                frame.move(x, y);
                thumb.move(frame.x()+1.5,frame.y()+22)
                up.move(frame.x()+1.5, frame.y()+1.5);
            },
            setHeight: function(height){
                frame.height(height)
                draw.height(height);
                up.move(frame.x()+1.5, frame.y()+1.5);
                down.move(frame.x()+1.5, frame.height()-20)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    
    var ProgressBar = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        var frame = draw.group();
        frame.rect(400,10).stroke("#B20098").fill("White")
        var bar = draw.rect(0,10).fill("green")
        

        return{
            move: function(x,y){
                frame.move(x,y)
                bar.move(x,y)
            },
            setWidth: function(width){
                frame.width(width)
            },
            getWidth: function(){
                frame.width()
            },
            setProgress: function(progress){
                bar.animate(5000).width((progress/100)*frame.width()).loop()     
            }
        }
    }

    var HorizontalSlide = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var frame = draw.group();
        frame.rect(500,20).fill('none').stroke({ width: 1, color: '#B20098' })
        frame.click(function(event){
            console.log("Window")
            console.log(event)
        })
        var slider = draw.rect(50, 20).fill('#FF66E8')
        var label = draw.text(' Click > >').fill("#B20098")
        .font({size: 16, family: 'Helvetica'});

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null
        slider.mouseover(function(){
            this.fill({ color: '#B20098'})
            if(slider.x()>frame.width()){
                slider.fill("#5fac5a")
            }
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        slider.mouseout(function(){
            this.fill({ color: '#FF66E8'})
            if(slider.x()>frame.width()){
                slider.fill("#5fac5a")
            }
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        slider.mouseup(function(){
            this.fill({ color: '#00a861'})
            if(slider.x()>frame.width()){
                slider.fill("#5fac5a")
            }
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        slider.click(function(){
            label.hide();
            slider.animate(1000, 0, 'now').attr({ fill: '#5fac5a' })
            .move(frame.width()+50,slider.y())
            console.log("Slide Completed")
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                frame.move(x, y);
                slider.move(frame.x(),frame.y())
                label.move(frame.x()+55,frame.y()+2)
            },
            setWidth: function(width){
                frame.width(width)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
return {Button,CheckBox,RadioButton,TextBox,ScrollBar,ProgressBar,HorizontalSlide}
}());

export{MyToolkit}
