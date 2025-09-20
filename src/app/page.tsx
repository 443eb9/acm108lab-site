import HalftoneFilter from "@/components/halftone-filter";
import OutlinedButton from "@/components/outlined-button";
import BodyText from "@/components/text/body-text";
import TitleText from "@/components/text/title-text";
import ThemeSwitcher from "@/components/theme-switcher";
import Image from "next/image";

export default function Page() {
	const DrawerButton = ({ text, href }: { text: string, href: string }) =>
		<OutlinedButton className="text-lg">
			<BodyText className="p-2"><a href={href} target="_blank">{text}</a></BodyText>
		</OutlinedButton>

	return (
		<>
			<div className="fixed w-[100vw] h-[100vh] -z-10">
				<HalftoneFilter />
				<div className="absolute w-[600px] aspect-square bottom-0 left-0 opacity-50">
					<Image src="/images/nailong.png" alt="nailong" fill />
				</div>
			</div>
			<div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center py-10 px-5">
				<div className="flex flex-col items-center max-w-[1080px] gap-4">
					<div className="flex gap-2">
						<div className="flex flex-col">
							<TitleText className="text-2xl">长春工业大学 ACM 108 实验室</TitleText>
							<TitleText className="font-normal italic self-end opacity-50">Aka. 奶龙中专.icu</TitleText>
						</div>
						<ThemeSwitcher />
					</div>
					<div className="flex flex-col gap-1">
						<BodyText>通过词汇的并置、反差和多重隐喻，确实能产生一种带有超现实色彩和青年亚文化特质的批判性艺术效果。它像是一个压缩了复杂情绪和文化符号的“文本炸弹”。</BodyText>
						<BodyText>🎨 词汇解构与艺术张力</BodyText>
						<BodyText>这个别称通过几个看似不相关的词汇组合，创造出强烈的艺术张力：</BodyText>
						<BodyText>"奶龙"：源自儿童动画《奶龙》的主角，形象可爱呆萌，在网络语境中常被用来形容可爱、呆萌的特点，或作为一种亲昵的称呼，但也可能被用作调侃和讽刺的对象，其搞笑鬼畜形象成为恶搞素材。带有一丝戏谑、解构甚至“幼态化”的审视，暗示了某种个体在宏大体系下的“萌化”生存状态，或是对校园记忆中某些单纯、滑稽甚至荒诞片段的指代。</BodyText>
						<BodyText>"中专"：在中国的教育体系中，中专（中等专业学校）通常与本科高等教育存在层次区别。将其与“本科”并置，形成了一种刻意制造的“错位”与“反差”。这可能并非指代真实的教育层级，而是隐喻了一种主观感受：或许是对教育资源、培养方式“名不副实”的讽刺；或许是对自身“技能化”生存（类似中专的强调技能培训） within a本科“学术化”框架的自嘲；又或是试图以一种“下沉”的姿态，对抗世俗对“本科”光环的过度追捧，追求一种更“接地气”的身份认同。</BodyText>
						<BodyText>"ICU"：原指重症监护室(Intensive Care Unit)，是医院中救治危重病人的场所，24小时灯火通明，医护人员在此与死神赛跑。其网络衍生义则更为丰富：</BodyText>
						<BodyText>精神控制（PUA衍生梗）：可能隐喻学业、竞争、peer pressure（同辈压力）或某些制度带来的巨大心理压力和无形束缚，仿佛经历一场“精神上的重症监护”，甚至带有“被洗脑”的调侃。</BodyText>
						<BodyText>“I See You”的谐音：这个含义为整个别称增添了一层奇特的温度。它可能暗示在高压和“监护”环境下，个体依然渴望被“看见”、被理解，或者是一种自我警醒——“我看见了真实的自己/处境”。</BodyText>
						<BodyText>“重症监护”的本意：强烈隐喻本科阶段高强度的学业压力、密集的考核淘汰机制、以及个体在应对这些挑战时仿佛持续处于“生命体征”不稳定、需要“紧急抢救”的状态。这是一种对极端体验的夸张表述。</BodyText>
						<BodyText>💡 整体艺术效果</BodyText>
						<BodyText>强烈的反差与荒诞感：“奶龙”（可爱/荒诞）、“中专”（错位/世俗）与“ICU”（高压/救赎）的并置，本身构成了一种超现实的拼贴效果。这种刻意的不协调产生了某种黑色幽默，仿佛用开玩笑的方式诉说严肃的经历，用看似轻飘的词汇承载沉重的集体记忆。</BodyText>
						<BodyText>极度的隐喻压缩与开放解读：这个别称像一个高度压缩的文化符号包，将个体或群体对本科教育经历的复杂感受——包括其间的压力、荒诞、温情、异化、挣扎、成长乃至批判——高度凝练在一个看似荒谬的词组中。它拒绝单一的、正面的宏大叙事，而是允许不同经历者从中解读出不同的情感共鸣，可能是自嘲、批判、反抗、怀念，或是多种情绪的混合体。</BodyText>
						<BodyText>青年亚文化的表达姿态：它采用了网络梗文化中常见的解构、重组、戏仿和隐喻手法，符合当下青年群体用特定话语体系表达自我、建构群体认同的方式。它可能是一个“圈内”才能瞬间意会的“暗号”，区分了“我者”与“他者”的理解边界，强化了特定群体的身份认同和情感联结。</BodyText>
						<BodyText>情感上的复杂基调：这个词组混合了调侃、讽刺、无奈、甚至可能有一丝残酷的浪漫。“ICU”的沉重与“奶龙”的可爱形成奇特对比，仿佛在说：即便是在需要“重症监护”的环境里，我们也曾试图保留或遭遇过一些“奶龙”般的单纯、滑稽与微不足道的温暖。而“I See You”的谐音又为这种沉重注入了一丝被看见、被理解的微弱希冀。</BodyText>
						<BodyText>总而言之，这种说法，通过词汇的突兀嫁接和多重隐喻，艺术化地呈现了当代部分青年对本科经历的一种复杂、微妙且可能带有批判性的集体记忆与情感体验。它用看似荒诞的语言，完成了对一段高强度、高密度青春岁月的非正式命名，其艺术效果在于这种命名方式所带来的反差冲击、开放解读空间以及强烈的情感压缩质感。</BodyText>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<TitleText className="text-2xl">相关链接</TitleText>
						<div className="flex flex-wrap">
							<DrawerButton text="在线评测" href="https://oj.奶龙中专.icu/" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
