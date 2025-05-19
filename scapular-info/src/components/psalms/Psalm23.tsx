import { useHoursContext } from "@/context/HoursContext";
import GloriaPatri from "../shared/GloriaPatri"


const Psalm23 = () => {
const {
        isLeader,
        leadChoir,
        followChoir,
    } = useHoursContext();

    const l = `psalm ${leadChoir ? '' : 'psalm-disabled'}`;
    const f = `psalm ${followChoir ? '' : 'psalm-disabled'}`;
    

    return (
        <>
            <p className="office-title"> PSALM 23 Domini est terra </p>
            <div className="flex flex-col gap-y-1">
                <p className="psalm">
                    <span className={ isLeader ? '' : 'psalm-disabled'}>THE earth is the Lord's, and the fullness thereof: *</span>
                    <span className={ leadChoir ? '' : 'psalm-disabled'}> the world and all they that dwell therein.</span>
                </p>
                <p className={f}>
                    For He hath founded it upon the seas, *
                    and hath prepared it upon the rivers.
                </p>
                <p className={l}>
                    Who shall go up to the mountain of the Lord? *
                    Or who shall stand in His holy place?
                </p>
                <p className={f}>
                    He that hath clean hands and a pure heart *
                    who hath not taken his sould in vain, nor sworn deceitfully to his neighbor.
                </p>
                <p className={l}>
                    He shall receive a blessing from the Lord, *
                    and mercy from God his Savior.
                </p>
                <p className={f}>
                    This is the generation of them that seek Him: *
                    of them that seek the face of the God of Jacob.
                </p>
                <p className={l}>
                    Lift up your gates, O ye princes, and be lifted up, O eternal gates: *
                    and the King of glory shall enter in.
                </p>
                <p className={f}>
                    Who is this King of glory? * <br />
                    <span className="office-instruction">(Stand and Bow)</span><br />
                    The Lord of hosts, He is the King of glory.
                </p>
                <GloriaPatri noBow={true} />
            </div>
        </>
    )
}

export default Psalm23;