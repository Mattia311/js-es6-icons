const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];



icons.forEach((icon,index,array) => {

    let cardClass = getColorsImage(icon.type);
    console.log(cardClass);

    const cardElement = `
            <div class="card">
                <i class="${icon.family} fa-${icon.name} ${cardClass} fa-2x"></i>
                <p>${icon.name}</p>
            </div>`
    document.querySelector('.row').insertAdjacentHTML('beforeend', cardElement)        
})


const select = document.getElementById('type');
select.addEventListener('change', function (){
    console.log(select.value);
    const option = select.value;
    const row = document.querySelector('.row');
    row.innerHTML = ''
    
    icons.forEach((icon) => {
        if(option == 'animal') {
            console.log(icon.type);
            let cardClass = getColorsImage(icon.type);
            /*console.log(cardClass);*/
            const cardElement = `
            <div class="card">
            <i class="${icon.family} fa-${icon.name} ${cardClass} fa-2x"></i>
            <p>${icon.name}</p>
            </div>`
            document.querySelector('.row').insertAdjacentHTML('beforeend', cardElement)
        }
        else if (option == 'vegetable') {
            console.log('vero');
            let cardClass = getColorsImage(icon.type);
            /*console.log(cardClass);*/
            const cardElement = `
            <div class="card">
            <i class="${icon.family} fa-${icon.name} ${cardClass} fa-2x"></i>
            <p>${icon.name}</p>
            </div>`
            document.querySelector('.row').insertAdjacentHTML('beforeend', cardElement)
        }
        else if ( option == 'user') {
            console.log('vero');
            let cardClass = getColorsImage(icon.type);
            /*console.log(cardClass);*/
            const cardElement = `
            <div class="card">
            <i class="${icon.family} fa-${icon.name} ${cardClass} fa-2x"></i>
            <p>${icon.name}</p>
            </div>`
            document.querySelector('.row').insertAdjacentHTML('beforeend', cardElement)
        }
        else {
            
            let cardClass = getColorsImage(icon.type);
            /*console.log(cardClass);*/
            const cardElement = `
            <div class="card">
            <i class="${icon.family} fa-${icon.name} ${cardClass} fa-2x"></i>
            <p>${icon.name}</p>
            </div>`
            document.querySelector('.row').insertAdjacentHTML('beforeend', cardElement)
        }
        
    })
})


function getColorsImage (type) {
    if(type == 'animal'){
        return 'blue';
    }
    else if (type == 'vegetable') {
        return 'orange';
    }
    else if ( type == 'user') {
        return ' purple'
    }
}




