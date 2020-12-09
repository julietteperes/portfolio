$(document).ready(function(){
	console.log('Ce que je veux');

	//Bibliothèque dans laquelle se trouve toutes mes images
	var images = ['images/a.jpg','images/b.jpg','images/c.jpg','images/d.jpg','images/e.jpg','images/f.jpg','images/g.jpg','images/h.jpg','images/i.jpg','images/j.jpg','images/k.jpg','images/l.jpg', 'images/m.jpg','images/n.jpg','images/o.jpg','images/p.jpg','images/q.mov','images/r.jpg','images/s.jpg','images/t.jpg','images/u.jpg','images/v1.jpg','images/v2.jpg','images/w.jpg','images/x.jpg','images/y.jpg','images/z.jpg'];
	var legendes = ['Installation sur panneau d’affichage, 300x200cm, impression laser couleur sur A4', 'Installation carton et feuilles A4, 160x200cm, cartel impression traçeur', 'contenu écrit effacé, 88 pages, 21x15 cm','Série de 3 photos d’Unités de Vie Familiales, photoshoppées','Dessins animés Processing','Calendrier, Exposition « Today’s clouds plagarized yesterday’s clouds » de 2 jours à Shanghai, suite à un Worshop','Vidéo à partir d’images google earth, ballade dans l’Assemblée Nationale, 1’37’’','Niche en plastique, rouge Lefranc Bourgeois, Exposition « Le chat noir noie Le poisson » en galerie','Impressions laser format A4','Formulaires, Google Form','Série de 5 torchons imprimés, 65x65cm', 'Formulaires Google Form, exposition Fatale Calendrier 2 l avent'];
	var pdf = ['images/g.pdf']



	//Quand on appuie sur une touche 
	$(document).keypress(function(e){
		console.log(e.key);
		
		if(e.key== 'a'){
			$('figure img').attr('src', images[0]);
			$('figure figcaption').html(legendes[0]);
			positionAleatoire(); 
			
		}
		if(e.key== 'b'){
			$('figure img').attr('src', images[1]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(e.key== 'c'){
			$('figure img').attr('src', images[2]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(e.key== 'd'){
			$('figure img').attr('src', images[3]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(e.key== 'e'){
			$('figure img').attr('src', images[4]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(e.key== 'f'){
			$('figure img').attr('src', images[5]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(e.key== 'g'){
			$('figure img').attr('src', images[6]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(e.key== 'h'){
			$('figure img').attr('src', images[7]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(e.key== 'i'){
			$('figure img').attr('src', images[8]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(e.key== 'j'){
			$('figure img').attr('src', images[9]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(e.key== 'k'){
			$('figure img').attr('src', images[10]);
			$('figure figcaption').html(legendes[4]);
			positionAleatoire();
		}
		if(e.key== 'l'){
			$('figure img').attr('src', images[11]);
			$('figure figcaption').html(legendes[4]);
			positionAleatoire();
		}
		if(e.key== 'm'){
			positionAleatoireProcessing();
		}
		if(e.key== 'n'){
			$('figure img').attr('src', images[13]);
				$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(e.key== 'o'){
			$('figure img').attr('src', images[14]);
				$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(e.key== 'p'){
			$('figure img').attr('src', images[15]);
				$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(e.key== 'q'){
			$('video').attr('src', images[16]);
				$('figure figcaption').html(legendes[6]);
			positionAleatoireVideo();
		}
		if(e.key== 'r'){
			$('figure img').attr('src', images[17]);
				$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(e.key== 's'){
			$('figure img').attr('src', images[18]);
			$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(e.key== 't'){
			$('figure img').attr('src', images[19]);
			$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(e.key== 'u'){
			$('figure img').attr('src', images[20]);
				$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(e.key== 'v'){
			$('figure img').attr('src', images[21]);
			$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(e.key== 'w'){
			$('figure img').attr('src', images[22]);
			$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(e.key== 'x'){
			$('figure img').attr('src', images[23]);
			$('figure figcaption').html(legendes[11]);
			positionAleatoire();
		}
		if(e.key== 'y'){
			$('figure img').attr('src', images[24]);
			$('figure figcaption').html(legendes[10]);
			positionAleatoire();
		}
		if(e.key== 'z'){
			$('figure img').attr('src', images[25]);
			$('figure figcaption').html(legendes[10]);
			positionAleatoire();
		}
	 });

	// au clic sur les lettres
	$('span').click(function(e){
		var lettre = $(this).attr('class');
		
		if(lettre== 'a'){
			$('figure img').attr('src', images[0]);
			$('figure figcaption').html(legendes[0]);
			positionAleatoire();

		}
		if(lettre== 'b'){
			$('figure img').attr('src', images[1]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(lettre== 'c'){
			$('figure img').attr('src', images[2]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(lettre== 'd'){
			$('figure img').attr('src', images[3]);
			$('figure figcaption').html(legendes[1]);
			positionAleatoire();
		}
		if(lettre== 'e'){
			$('figure img').attr('src', images[4]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(lettre== 'f'){
			$('figure img').attr('src', images[5]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(lettre== 'g'){
			$('figure img').attr('src', images[6]);
			$('figure figcaption').html(legendes[2]);
			positionAleatoire();
		}
		if(lettre== 'h'){
			$('figure img').attr('src', images[7]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(lettre== 'i'){
			$('figure img').attr('src', images[8]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(lettre== 'j'){
			$('figure img').attr('src', images[9]);
			$('figure figcaption').html(legendes[3]);
			positionAleatoire();
		}
		if(lettre== 'k'){
			$('figure img').attr('src', images[10]);
			$('figure figcaption').html(legendes[4]);
			positionAleatoire();
		}
		if(lettre== 'l'){
			$('figure img').attr('src', images[11]);
			$('figure figcaption').html(legendes[4]);
			positionAleatoire();
		}
		if(lettre== 'm'){
			$('#processing').css('display','block');
			positionAleatoireProcessing();

		}
		if(lettre== 'n'){
			$('figure img').attr('src', images[13]);
			$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(lettre== 'o'){
			$('figure img').attr('src', images[14]);
			$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(lettre== 'p'){
			$('figure img').attr('src', images[15]);
			$('figure figcaption').html(legendes[5]);
			positionAleatoire();
		}
		if(lettre== 'q'){
			$('video').attr('src', images[16]);
				$('figure figcaption').html(legendes[6]);
			positionAleatoireVideo();
		}
		if(lettre== 'r'){
			$('figure img').attr('src', images[17]);
			$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(lettre== 's'){
			$('figure img').attr('src', images[18]);
			$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(lettre== 't'){
			$('figure img').attr('src', images[19]);
			$('figure figcaption').html(legendes[7]);
			positionAleatoire();
		}
		if(lettre== 'u'){
			$('figure img').attr('src', images[20]);
			$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(lettre== 'v'){
			$('figure img').attr('src', images[21]);
			$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(lettre== 'w'){
			$('figure img').attr('src', images[22]);
			$('figure figcaption').html(legendes[8]);
			positionAleatoire();
		}
		if(lettre== 'x'){
			$('figure img').attr('src', images[23]);
			$('figure figcaption').html(legendes[11]);
			positionAleatoire();
		}
		if(lettre== 'y'){
			$('figure img').attr('src', images[24]);
			$('figure figcaption').html(legendes[10]);
			positionAleatoire();
		}
		if(lettre== 'z'){
			$('figure img').attr('src', images[25]);
			$('figure figcaption').html(legendes[10]);
			positionAleatoire();
		}
	 });

	function positionAleatoire(){
		$('figure').css('display', "block");
		$('video').css('display', "none");
		$('#processing').css('display', 'none');
		// //j'assigne une variable à l'élément top
		var elementTop = Math.floor(Math.random()*($(window).height()-$('figure').height()));
		var elementLeft = Math.floor(Math.random()*($(window).width()-$('figure').width()));
		console.log(elementTop);
		$('figure').css('top',elementTop);
		$('figure').css('left',elementLeft);

	}

	function positionAleatoireVideo(){
		$('video').css('display', "block");
		$('figure').css('display', "none");
		$('#processing').css('display', 'none');
		// //j'assigne une variable à l'élément top
		var elementTop = Math.floor(Math.random()*($(window).height()-$('video').height()));
		var elementLeft = Math.floor(Math.random()*($(window).width()-$('video').width()));
		console.log(elementTop);
		$('video').css('top',elementTop);
		$('video').css('left',elementLeft);

	}

	function positionAleatoireProcessing(){
		$('#processing').css('display', 'block');
		$('video').css('display', "none");
		$('figure').css('display', "none");
		// //j'assigne une variable à l'élément top
		var elementTop = Math.floor(Math.random()*($(window).height()-$('#processing').height()));
		var elementLeft = Math.floor(Math.random()*($(window).width()-$('#processing').width()));
		console.log(elementTop);
		$('#processing').css('top',elementTop);
		$('#processing').css('left',elementLeft);

	}
 });
