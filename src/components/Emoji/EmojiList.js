import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const EmojiList = ({emoji,loading,loadMore,pageEnd,search}) =>{

	const handleCopied = () =>{
		toast('Copied to clipboard');
	}

	return(
		<>
			<div className="categories__row">	
				{
					emoji.length > 0 ?
					emoji.map((emoj,i)=>(
							<CopyToClipboard key={i} text={emoj.char}>
							<span title={emoj.name} onClick={handleCopied}>{emoj.char}</span>
							</CopyToClipboard>
						))
					:<h5>Emoji Not Found!</h5>
				}
			</div>
			{loading && <Loading />}
			{
				!search && (
					<div className={`loadmore__btn ${!emoji.length ? 'd-none':''}`}>
						<button ref={pageEnd} className="btn btn-outline" onClick={loadMore}>Load More</button>
					</div>
					)
			}	
		</>	
		)
}

export default EmojiList;