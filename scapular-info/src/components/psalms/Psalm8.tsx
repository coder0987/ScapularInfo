import { useHoursContext } from "@/context/HoursContext";
import GloriaPatri from "../shared/GloriaPatri"


const Psalm8 = () => {
    const {
        isLeader,
        leadChoir,
        followChoir,
    } = useHoursContext();

    const l = `psalm ${leadChoir ? '' : 'psalm-disabled'}`;
    const f = `psalm ${followChoir ? '' : 'psalm-disabled'}`;


    return (
        <>
            <p className="office-title"> PSALM 8 Domine, Dominus noster </p>
            <div className="flex flex-col gap-y-1">
                <p className="psalm">
                    <span className={ isLeader ? '' : 'psalm-disabled'}>O LORD, our Lord, how admirable is Thy name in the Whole earth! *</span>
                    <span className={ leadChoir ? '' : 'psalm-disabled'}> For Thy magnificence is elevated above the heavens.</span>
                </p>
                <p className={f}>
                    Out of the mouth of babes and sucklings Thou hast perfected praise because of Thine enemies, *
                    that Thou mayest destroy the enemy and the avenger.
                </p>
                <p className={l}>
                    For I will behold Thy heavens, the works of Thy fingers: *
                    the moon and the stars which Thou hast set.
                </p>
                <p className={f}>
                    What is man that Thou art mindful of him? *
                    or the son of man that Thou visitest him?
                </p>
                <p className={l}>
                    Thou hast made him a little less than the angels, Thou hast crowned him with glory and honor, *
                    and hast set him over the works of Thy hands.
                </p>
                <p className={f}>
                    All things Thou hast put under his feet: *
                    sheep and all oxen, yea, also the beasts of the field.
                </p>
                <p className={l}>
                    The birds of the air and the fishes of the sea, *
                    that pass through the paths of the sea.
                </p>
                <p className={f}>
                    O Lord, our Lord, * <br />
                    <span className="office-instruction">(Stand and Bow)</span><br />
                    how admirable is Thy name in all the earth!
                </p>
                <GloriaPatri noBow={true} />
            </div>
        </>
    )
}

export default Psalm8;