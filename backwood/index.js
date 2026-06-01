
const hiden = document.getElementById('hiden')
const close = document.getElementById('close_hide_sec')
const dop_height = document.getElementById('dop_height')
const open = document.getElementById('butt_open')

const conf = document.getElementById('confirm')
const order_center = document.getElementById('order_center')
const order_complete = document.getElementById('order_complete')

const cancel_quit = document.getElementById('cancel_quit')
const cancel_confirm = document.getElementById('cancel_confirm')
const cancel_order_butt = document.getElementById('cancel_order_butt')

open.addEventListener('click', () => {
    console.log('click open')
    hiden.style.display = 'flex'
    dop_height.style.display = 'flex'
})

close.addEventListener('click', () => {
    console.log('click close')
    hiden.style.display = 'none'
    dop_height.style.display = 'none'
})

conf.addEventListener('click', () =>{
    console.log('click confirm')
    order_center.style.display = 'none'
    order_complete.style.display = 'flex'
})

cancel_order_butt.addEventListener('click', () =>{
    console.log('click cancel order')
    order_complete.style.display = 'none'
    cancel_confirm.style.display = 'flex'
})

cancel_quit.addEventListener('click', () =>{
    console.log('click cancel quit')
    cancel_confirm.style.display = 'none'
    order_center.style.display = 'flex'
})