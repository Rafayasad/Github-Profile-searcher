let link = "";
let display=true;
function abc()
{
if(display==true)
{
    document.getElementById("userinput")=true;

}
else
{
    document.getElementById("userinput")=false
}
}
let Enter=()=>
{
let name=document.getElementById("userinput").value
fetch(`https://api.github.com/users/${name}`)
.then(response=>
{
return response.json()
})
.then(data =>
{
document.getElementById('user-img').src= data.avatar_url;
document.getElementById('name').innerHTML= data.name;  
document.getElementById('bio').innerHTML= data.bio;  
document.getElementById('Repo').innerHTML= data.public_repos;  
document.getElementById('Followers').innerHTML= data.followers; 
document.getElementById('Following').innerHTML= data.following;
link=data.html_url; 
abc()
})
}
let veiw_profile=function ()
{
console.log(link);
location.href=link;
}
