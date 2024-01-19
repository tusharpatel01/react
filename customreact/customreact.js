function customrender(reactelement,container){
    const domElement=document.createElement(reactelement.type)
    domElement.innerHTML=reactelement.children
    domElement.setAttribute('href',reactelement.props.href)
    domElement.setAttribute('target',reactelement.props.target)

    container.appendchild(domElement)
}
// const reactelement={
//     type:'a',props:{
//         href:'http//google.com',
//         target:'blank'
//     },
//     children:'click me to visit google'
// }
const anotherelement=(
    <a href="http://google.com" target='_blank'>visit google </a>
)
const anotheruser =(
<a href ="http://google.com " target="_blank"> visit  again and  </a> 
)
const maincontainer=document.getElementById("#root")
anotherelement

customrender(reactelement,maincontainer)