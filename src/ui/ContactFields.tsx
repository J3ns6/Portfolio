import { useState, useEffect } from 'react';
import CopyClipboardBtn from '~/ui/CopyClipboardBtn';
import SendMailBtn from '~/ui/SendMailBtn';
import { Fade } from 'react-awesome-reveal';
interface props {
	name: string;
}

export default function ContactFields({ name }: props) {
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		const clickeds = setTimeout(() => {
			setClicked(false);
		}, 2000);
		return () => {
			clearTimeout(clickeds);
		};
	});

	return (
		<div>
			{clicked === true ? (
				<button className="bg-gray-400 bg-opacity-30 text-4xl rounded-lg w-full xl:w-[67.5rem] h-28 flex items-center text-center justify-center">
					<p className="px-6">Text kopiert</p>
				</button>
			) : (
				<div className="bg-gray-100 group rounded-lg w-full xl:w-[67.5rem] xl:mr-8 h-28 flex items-center text-center relative justify-center">
					<p className="text-center m-8 sm:m-12 md:m-14 self-center group-hover:hidden text-lg sm:text-2xl md:text-3xl lg:text-4xl">
						{name}
					</p>
					<div className="group-hover:flex w-full hidden">
						<Fade duration={500}>
							<SendMailBtn btnName="Email versenden" mail={name} />
							<CopyClipboardBtn
								btnName="Text kopieren"
								copyText={name}
								setClicked={setClicked}
							/>
						</Fade>
					</div>
				</div>
			)}
		</div>
	);
}
