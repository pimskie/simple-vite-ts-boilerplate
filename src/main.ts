import './style.css'
  import logo from './logo.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logo}" class="logo" alt="Pimskie logo" />
    </a>
  
    <h1>Let's go</h1>
  </div>
`
