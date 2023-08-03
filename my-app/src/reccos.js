import './styles/reccos.css';
import Review from './components/review';
import plaguetalevideo from './gifs/plaguetale.gif'
import tlouvideo from './gifs/tlou.gif'
import dbhvideo from './gifs/dbh.gif'
import rdr2video from './gifs/rdr2.gif'
import cyberpunkvideo from './gifs/cyberpunk.gif'
import niervideo from './gifs/nier.gif'

const nier = "A somber tale that strings us along the wastelands of Earth. What it loses in gameplay, it makes up for with an incredible soundtrack. If you have never had the pleasure of frisson, you will soon."
const cyberpunk = "Though plagued by early scandals and glitches, Cyberpunk: 2077 ultimately delivers a high-octane narrative that serves as a cautionery tale about the caveats of radical economic policies.";
const rdr2 = "A masterpiece that combines skillful world making with powerful story telling. To those men who claim to never cry, this opus might just be the thing to break that streak of theirs."
const dbh = "What makes an incredibly advanced AI that shows joy, anger, and sorrow not human? With the way things are moving, now's maybe a good time to sympathize with our pseudoselves."
const tlou = "If pandemics and zombies are your thing, then TLoU series is for you. As you venture across settlements and post-apocalyptic cities, you can't help but wonder if humans were the true monsters after all."
const plaguetale = "Follow the DeRune siblings as they fight hoardes of flesh hungry, evil rats to find a cure to Hugo's curse in this unique rendition of The Black Death. Do not play this if you have a pet rat.";

function Reccos() {
	return (
		<div className='body'>
			<br/>
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
