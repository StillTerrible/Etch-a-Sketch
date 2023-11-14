const container = document.querySelector('.container');

function buildGrid(divPerSide) {
    let totalNum = divPerSide*divPerSide;
    let divRibSize = (960/divPerSide);
    console.log(totalNum + " " + divRibSize);

    for (let i = 0; i < totalNum; i++) {
        let div = document.createElement('div');
        div.style.height = `${divRibSize}px`;
        div.style.width = `${divRibSize}px`;
        div.style.backgroundColor = 'rgba(0,0,0,0)';
        let a = 0;
        div.addEventListener('mouseover', () => {
            if (a < 1) {
                a += 0.1;
                div.style.backgroundColor = `rgba(0,0,0,${a})`;
            }
        });
    
        container.appendChild(div);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.height = '60px';
    div.style.width = '60px';
    div.style.backgroundColor = 'rgba(0,0,0,0)';
    let a=0;
    div.addEventListener('mouseover', () => {
        if (a < 1) {
        a += 0.1;
        div.style.backgroundColor = `rgba(0,0,0,${a})`;
        }
    });



    container.appendChild(div);

    
}

const rButton = document.querySelector('button');

rButton.addEventListener('click', () => {
removeAllChildNodes(container);

let newSize = prompt('number of squares per side for the new grid (1-100)', 0);
newSize = +newSize;
if (newSize <= 100 && newSize >= 1) {
    buildGrid(newSize);
}
else {
    alert('Input Unacceptable');
}
});

