function rightangle(){
document.write("<h4>Right Angled Triangle</h4>")
for(let i=1;i<=5;i++)
    {
    for(let j=1;j<=i;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}
}

function inverted_riht_angle(){

document.write("<br>")
document.write("<br>")
document.write("<h4>Inverted Right Angled Triangle</h4>")
for(let i=1;i<=5;i++)
    {
        for(let j=i;j<=4;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}

}

function trianle(){

document.write("<br>")
document.write("<br>")

document.write("<h4> Triangle</h4>")
for(let i=1;i<=5;i++)
    {
        for(let k=i;k<=4;k++)
    {
        document.write('&nbsp')
    }
    for(let j=1;j<=i;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}

}


function mirror_right_angle(){
document.write("<br>")
document.write("<br>")
document.write("<h4>Mirror right angled Triangle</h4>")

for(let i=1;i<=5;i++)
{
    for(let k=1;k<=5-i;k++)
    {
        document.write('&nbsp&nbsp')
    }
    for(let j=1;j<=i;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}



}


function pyramid(){
document.write("<br>")
document.write("<br>")

document.write("<h4>Pyramid</h4>")
for(let i=1;i<=5;i++)
{
    for(let k=i;k<=4;k++)
    {
        document.write('&nbsp&nbsp')
    }
    for(let j=1;j<=(2*i)-1;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}
}

// document.write("<br>")
// document.write("<br>")

// document.write("<h4>Pyramid</h4>")
// for(let i=1;i<=5;i++)
// {
//     for(let k=i;k<=4;k++)
//     {
//         document.write('&nbsp&nbsp')
//     }
//     for(let j=1;j<=(2*i)-1;j++)
//     {
//         document.write("*")
//     }

//     for(let i=1;i<=5;i++)
//         {
//             for(let k=i;k<=4;k++)
//                 {
//                     document.write('&nbsp&nbsp')
//     }
//     for(let j=1;j<=2*(6-i)-1;j++)
//     {
//         document.write("*")
//     }
// }
// document.write("<br>")
// }



let arr=[10,20,60,75,80]
let newArr=arr.map(i=> i%2==0 ? i:" false")
document.write(newArr)
document.write("<br>")

ls=[10,20,34,65,87,39,49]
document.write(ls.filter(i => i%2==0))


document.write("<br> ")
const nums=[20,45,65]
let sum=0
for(const num of nums)
{
    sum=sum+num
}
document.write("This is sum "+sum)



