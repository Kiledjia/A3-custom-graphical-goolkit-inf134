// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        
        var rect = draw.rect(100,50).fill('#6699cc')

        var label = draw.text('Button')
        .font({size: 16, family: 'Helvetica'});
        
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null
        
        rect.mouseover(function(){
            this.fill({ color: '#808080'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: '#6699cc'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        rect.mouseup(function(){
            this.fill({ color: '#6699cc'})
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
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
        
        var rect = draw.rect(15,15).fill('none').stroke({ width: 2, color: '#808080' })     

        var label = draw.text('Check Box Label')
        .font({size: 16, family: 'Helvetica'});

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
            var text = draw.text('✓')
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
    var RadioButton = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(30);
        
        var circle  = draw.circle(15).fill('none').stroke({ width: 2, color: '#808080' })     

        var label = draw.text('Radio Label')
        .font({size: 16, family: 'Helvetica'});

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        circle.mouseover(function(){
            this.fill({ color: 'white'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        circle.mouseout(function(){
            this.fill({ color: 'white'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        circle.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        circle.click(function(event){
            // var clicked = false;
            // if(clicked != true){
                var radio  = draw.circle(10).fill('black').move(circle.x()+2.6, circle.y()+2.3); 
            //     clicked = true;
            // }
            // if(clicked != true){
            radio.click(function(event){
                radio.remove();
                if(clickEvent != null)
                clickEvent(event)
            })
                if(clickEvent != null)
                    clickEvent(event)
        })
        return {
            move: function(x, y) {
                circle.move(x, y);
                label.move(x+20,y-1)
            },
            setText: function(text){
                label.text(text);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            removeToggle: function(boolean){
                if(boolean == true){
                    circle.remove();
                }
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
    var TextBox = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        var frame = draw.group();
        frame.rect(400,50).stroke("#6699cc").fill("White")
        frame.click(function(event){
            console.log("Window")
            console.log(event)
        })

        var text = frame.text("").move(20,10)
        
        var caret = frame.rect(2,15).move(20,20)
        var runner = caret.animate().width(0);
        runner.loop(1000,1,0);

        SVG.on(window,'keyup',(event)=>{
            if(text.length()<365){
                text.text(text.text()+event.key)
                caret.x(text.length()+30) 
                console.log("Text Has Change")
            console.log(event)
            }  
        })
        frame.move(10,10)


        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        frame.mouseover(function(){
            this.fill({ color: 'black'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        frame.mouseout(function(){
            this.fill({ color: 'black'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        frame.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        frame.click(function(event){
            // var clicked = false;
            // if(clicked != true){
                // var radio  = draw.circle(10).fill('black').move(circle.x()+2.6, circle.y()+2.3); 
            //     clicked = true;
            // }
            // if(clicked != true){
            // radio.click(function(event){
            //     radio.remove();
            //     if(clickEvent != null)
            //     clickEvent(event)
            // })
                if(clickEvent != null)
                    clickEvent(event)
        })
        return {
            move: function(x, y) {
                // circle.move(x, y);
                // label.move(x+20,y-1)
            },
            setText: function(text){
                // label.text(text);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            // removeToggle: function(boolean){
            //     if(boolean == true){
            //         circle.remove();
            //     }
            // },
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
        frame.rect(20,300).fill('none').stroke({ width: 2, color: '#808080' })
        frame.click(function(event){
            console.log("Window")
            console.log(event)
        })
        var thumb = draw.rect(15, 50).fill('#6699cc')
        thumb.radius(10)
        
        var up = draw.text('▲')
        .font({size: 17, family: 'Helvetica', weight: "bold"}).fill("#6699cc")
        var down = draw.text('▼')
        .font({size: 17, family: 'Helvetica', weight: "bold"}).fill("#6699cc")
        
        


        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        thumb.mouseover(function(){
            this.fill({ color: '#517AA3'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        thumb.mouseout(function(){
            this.fill({ color: '#6699cc'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        thumb.mouseup(function(){
            this.fill({ color: '#6699cc'})
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        thumb.click(function(event){
            this.fill({ color: '#334C66'})
            // thumb.move(frame.x()+2.5,150)
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
            if(thumb.y()<frame.height()-80){
                thumb.move(thumb.x(),thumb.y()+10)
            }
                if(clickEvent != null)
                    clickEvent(event)
                    console.log("scroll thumb has moved down")
        })
        thumb.mousedown(function(){
            SVG.on(thumb,'mousemove',(event)=>{
                if(thumb.y()<frame.height()-80){
                    thumb.move(thumb.x(),event.offsetY)
                    console.log(event)
                    console.log(event.offsetY)                
                }
            })
        })
        return {
            move: function(x, y) {
                frame.move(x, y);
                thumb.move(frame.x()+2.5,frame.y()+25)
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
return {Button,CheckBox,RadioButton,TextBox,ScrollBar}
}());

export{MyToolkit}
