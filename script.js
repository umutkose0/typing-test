var words=["walk","have","below","three","ask","animal","under","are","food","sentence","seem","idea","must","picture","down","together","but","well","change","list","tree","walk","have","below","animal","under","food","sentence","idea","below","walk","down","up","hello","where","come","abstract","heal","Turkey","car","word","mirror","across","act","afraid","belong","better","big","bill","boat","carefully","catch","cattle","caught","cause","cell","center","cent","correct","deep","desert","design","details","determine","did","do","doctor","either","else","if","energy","England","everything","exactly","example","except","eye","face","fact","fall","far","farm","fast","fine","fish","fit","flowers","follow","got","Greek","green","grew","ground","happy","he","head","hear","heat","help","home","how","huge","human","idea","instead","interest","into","itself","job","join","kind","known","last","lay","lead","learn","length","letter","little","long","look","map","meet","men","metal","method","might","minute","modern","miss","mind","member","night","nose","not","nothing","number","object","observe","ocean","of","off","often","oil","plan","plain","plant","please","plural","practice","prepare","pretty","probably","problem","question","quickly","quite","read","reason","red","region","ring","rise","river","road","rock","rolled","Rule","safe","said","sail","same","sand","sat","save","saw","say","scale","school","science","scientist","score","sea","seat","second","section","see","sell"]
var kelimeIndeksi=new Array()
var skor=Array()
var area=document.getElementById("dis")
var txtbox=document.getElementById("inputtext")
var sayac=0
var satirSayisi=1
var yazilanKelime
var gizliAlan=document.getElementById("gizlialan")
var tumSpanlar=document.getElementsByTagName("span")
var divZaman=document.getElementById("divzaman")
var saniye=60
var divSonuc=document.getElementById("divsonuc")
skor['dogru']=0
skor['yanlis']=0
skor['karakter']=0
function kelimeYaz()
{
    for (var i = 0; i < words.length; i++) {
        var rnd=Math.floor(Math.random()*words.length)
        area.innerHTML+="<span value='"+i+"'>"+words[rnd]+" </span>"
        kelimeIndeksi[i]=words[rnd]
        //console.log(words[i])
    }
    tumSpanlar[0].style.background="lightgray"
    //area.style.background='red'; // css:background-color
}
//object.innerHTML divin içeriğine metin yazma
//object.value inputun metni

function keyupped()
{
    karsilastir()
    
    if( gizliAlan.value=="60")
    {

        gizliAlan.value="xyz"
        zaman()
        
    }
}

function karsilastir()
{
    if(txtbox.value==tumSpanlar[sayac].innerHTML.substr(0,txtbox.value.length))
    {
        tumSpanlar[sayac].style.background="lightgray"
    }
    else
    {
        tumSpanlar[sayac].style.background="red"
    }
    //txtbox.value[txtbox.value.length-1]==" "
    if(txtbox.value.includes(" ") && txtbox.value.length>2)
    {

        yazilanKelime=txtbox.value.substr(0,txtbox.value.length-1)
        
        txtbox.value="" //txtbox.value txtbox içindeki metin 

        if(kelimeIndeksi[sayac]==yazilanKelime)
        {
            //console.log("başarılı")
            tumSpanlar[sayac].style.color="green"
            tumSpanlar[sayac].style.background="white"
            tumSpanlar[sayac+1].style.background="lightgray"
            skor['dogru']++
            skor['karakter']+=yazilanKelime.length;
        }
        else
        {
            //console.log("hatali")
            tumSpanlar[sayac].style.color="red"
            tumSpanlar[sayac].style.background="white"
            tumSpanlar[sayac+1].style.background="lightgray"
            skor['yanlis']++
            skor['karakter']+=yazilanKelime.length;
        }
        console.log(tumSpanlar[sayac].getBoundingClientRect().x+" next:"+tumSpanlar[sayac+1].getBoundingClientRect().x)
        
        if(tumSpanlar[sayac].getBoundingClientRect().x>tumSpanlar[sayac+1].getBoundingClientRect().x)
        {
            area.style.top="-"+(satirSayisi*47)+"px"
            satirSayisi++
        }
        sayac++
    }
}

function zaman()
{
        setTimeout(
        function(){
        saniye--
        if(saniye>=10)
        divZaman.innerHTML="0:"+saniye
        if(saniye<10)
            divZaman.innerHTML="0:0"+saniye
        if(saniye<1)
        {
            divSonuc.innerHTML=("<br>dogru kelime sayısı : "+skor['dogru']+
                "<br><hr> yanlis kelime sayisi : "+skor["yanlis"]+
                "<br><hr> tuş basış sayısı : "+skor['karakter'])
            divSonuc.style.display="block";
        }
        if(saniye>0)
            zaman()
                },1000)
    
}
