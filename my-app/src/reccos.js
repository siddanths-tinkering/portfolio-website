import './styles/reccos.css';
import Review from './components/review';
import plaguetalevideo from './gifs/plaguetale.gif'
import tlouvideo from './gifs/tlou.gif'
import dbhvideo from './gifs/dbh.gif'
import rdr2video from './gifs/rdr2.gif'
import cyberpunkvideo from './gifs/cyberpunk.gif'
import niervideo from './gifs/nier.gif'

const nier = "If you have never cried or gotten goosebumps from music, I don’t blame you—music nowadays just isn’t that great. But, play this and I guarantee you with this game’s soundtrack that you’ll finally feel the sweet release of frisson."
const cyberpunk = "A cautionary tale that makes you ponder about how bad ultra capitalism will truly be for us. Safe to say I hate it now. Wait-didn’t I just pay 100 dollars for this game and its merchandise?!";
const rdr2 = "I’m serious when I say I grew a couple of chesthairs and the stride of an outlaw after a couple of hours hammering at this game. Oh, and as quickly as it does that, it then immediately turns you into a sobbing mess. 100/10."
const dbh = "What makes an incredibly advanced AI that shows joy, anger, and sorrow not human? With the way things are moving, now's maybe a good time to sympathize with our pseudoselves (I’m looking at you, Roko's Basilisk)."
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
			<br></br>
			<Review title="A Plague's Tale Series" sentence={plaguetale} video={plaguetalevideo} rating="9.5"></Review><br/>
			<Review title="The Last of Us Series" sentence={tlou} video={tlouvideo} rating="9.5"></Review><br/>
			<Review title="Detroit: Become Human" sentence={dbh} video={dbhvideo} rating="9.0"></Review><br/>
			<Review title="Red Dead Redemption 2" sentence={rdr2} video={rdr2video} rating="9.0"></Review><br/>
			<Review title="Cyberpunk 2077" sentence={cyberpunk} video={cyberpunkvideo} rating="8.5"></Review><br/>
			<Review title="NieR: Automata" sentence={nier} video={niervideo} rating="8.5"></Review><br/>
		</div>
	)
}

export default Reccos;
