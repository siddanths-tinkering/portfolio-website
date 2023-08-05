import './styles/reccos.css';

import Review from './components/review';

import plaguetalevideo from './gifs/plaguetale.gif'
import tlouvideo from './gifs/tlou.gif'
import dbhvideo from './gifs/dbh.gif'
import rdr2video from './gifs/rdr2.gif'
import cyberpunkvideo from './gifs/cyberpunk.gif'
import niervideo from './gifs/nier.gif'
import alienisolationvideo from './gifs/alienisolation.gif'
import gtavideo from './gifs/gta.gif'


const gta = "Guns, cars, violence, and explosions; this truly is a Steven Spielberg movie on steroids. If you have ever wanted to feel like a domestic terrorist (for some reason), then this bastion of anarchy will definitely satisfy that lust."
const alienisolation = "Was I screaming? Yes. Was I peeking from under my desk to pilot Amanda Ripley through the Sevastopol? Yes. Am I ashamed of it? Well…yes."
const nier = "If you have never cried or gotten goosebumps from music, I don’t blame you—music nowadays just isn’t that great. But, play this and I guarantee you with this game’s soundtrack that you’ll finally feel the sweet release of frisson."
const cyberpunk = "A cautionary tale that makes you ponder about how bad ultra capitalism will truly be for us. Safe to say I hate it now. Wait-didn’t I just pay 100 dollars for this game and its merchandise?!";
const rdr2 = "I’m serious when I say I grew a couple of chesthairs and the stride of an outlaw after a couple of hours hammering at this game. Oh, and as quickly as it does that, it then immediately turns you into a sobbing mess. 100/10."
const dbh = "What makes an incredibly advanced AI that shows joy, anger, and sorrow not human? With the way things are moving, now's maybe a good time to sympathize with our pseudoselves (I’m looking at you, Roko's basilisk)."
const tlou = "If pandemics and zombies are your thing, then TLoU series is for you. As you venture across settlements and post-apocalyptic cities, you can't help but wonder if we were the true monsters after all."
const plaguetale = "Follow the DeRune siblings as they fight hordes of flesh hungry, evil rats to find a cure to Hugo's curse in this unique rendition of The Black Death. Word of caution: do not play this if you have a pet rat.";

function Reccos() {
	return (
		<div className='body'>
			<br/>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Review title="Grand Theft Auto V" sentence={gta} link="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" video={gtavideo} rating="9.5"></Review><br/>
			<Review title="Alien: Isolation" sentence={alienisolation} link="https://store.steampowered.com/app/214490/Alien_Isolation/" video={alienisolationvideo} rating="9.5"></Review><br/>
			<Review title="A Plague's Tale Series" sentence={plaguetale} link="https://store.steampowered.com/sub/802975/" video={plaguetalevideo} rating="9.5"></Review><br/>
			<Review title="The Last of Us Series" sentence={tlou} link="https://store.steampowered.com/bundle/30590/The_Last_of_Us_Part_I_Digital_Deluxe_Edition/" video={tlouvideo} rating="9.5"></Review><br/>
			<Review title="Detroit: Become Human" sentence={dbh} link="https://store.steampowered.com/app/1222140/Detroit_Become_Human/" video={dbhvideo} rating="9.0"></Review><br/>
			<Review title="Red Dead Redemption 2" sentence={rdr2} link="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" video={rdr2video} rating="9.0"></Review><br/>
			<Review title="Cyberpunk 2077" sentence={cyberpunk} link="https://store.steampowered.com/app/1091500/Cyberpunk_2077/" video={cyberpunkvideo} rating="8.5"></Review><br/>
			<Review title="NieR: Automata" sentence={nier} link="https://store.steampowered.com/app/524220/NieRAutomata/" video={niervideo} rating="8.5"></Review><br/>
		</div>
	)
}

export default Reccos;
