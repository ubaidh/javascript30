const inp=document.querySelectorAll('.controls input');

function handle(){
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
    console.log(this.value + suffix)
}
inp.forEach((d)=>d.addEventListener('change',handle))
inp.forEach((d)=>d.addEventListener('mousemove',handle))