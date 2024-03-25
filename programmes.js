const programmes = [
    {
        name:"Woodwork",
        description:"Woodworking is a rewarding and fulfilling hobby that can produce beautiful and useful items for your home or as gifts for friends and family. Whether you're a beginner or an experienced woodworker, there's always something new to learn and skills to improve.A woodworking project makes an excellent sense for any student with an appreciation for nature.",
        times:"8 AM -10 AM (Grade 5) & Mon-Fri 11 AM - 1 PM (Grade 5)",
        teacher:"",
        img:"src/img/IMG-20240221-WA0007.jpg",

    },

    {
        name:"Leatherwork",
        description:"",
        times:"8 AM - 10 AM (Grade 4 & 5) & Mon-Fri 11 AM - 1 PM (Grade 4 & 5)",
        teacher:"",
        img:"src/img/IMG-20240221-WA0002.jpg",

    },

    {
        name:"Printing",
        description:"",
        times:"8 AM - 10 AM (Grade 4 & 5) & 11 AM - 1PM (Grade 4 & 5)",
        teacher:"",
        img:"src/img/IMG-20240221-WA0006.jpg",
    },

    {
        name:"Gardening",
        description:"",
        times:"8 AM - 10 AM (Grade 5) & 11 AM - 1 PM (Grade 5)",
        teacher:"",
        img:"src/img/gardening.jpg",
    },

    {
        name:"Sewing",
        description:"",
        times:"8 AM - 10 AM (Grade 4 & 5) & 11 AM - 1 PM (Grade 4 & 5)",
        teachers:"",
        img:"src/img/sewing.jpg",
    },

    {
        name:"Beadwork",
        description:"",
        times:"8 AM - 10 AM (Grade 4 & 5) & 11 AM - 1 PM (Grade 4 & 5)",
        teacher:"",
        img:"src/img/bead2.jpg",
    },

    {
        name:"Sports",
        description:"",
        times:"",
        teacher:"",
        img:"src/img/sport1.jpg",

    },

    {
        name:"Activites",
        description:"",
        times:"",
        teacher:"",
        img:"src/img/IMG-20240319-WA0001.jpg",
    },
]


let selected = document.getElementsByClassName("control")[0]
let final = ""

for(let i = 0; i<programmes.length; i++){
    final +=`<div class="col-lg-3 col-md-6 col-sm-6">
    <div class="classes-col">
        <div class="class-thumb">
            <img src="${programmes[i].img}" alt="" class="w-100">
        </div>
        <div class="class-info">
            <h3><a href="class-single.html" title="">${programmes[i].name}</a></h3>
            <span>Mon-Fri</span>
            <span>${programmes[i].times}</span>
            <div class="d-flex flex-wrap align-items-center">
                <div class="posted-by">
                    
                    <a href="#" title=""></a>
                </div>
                <strong class="price"></strong>
            </div>
        </div>
    </div><!--classes-col end-->
</div>` 
}

selected.innerHTML = final
