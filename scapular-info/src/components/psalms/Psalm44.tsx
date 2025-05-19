import { useHoursContext } from "@/context/HoursContext";
import GloriaPatri from "../shared/GloriaPatri"


const Psalm44 = () => {
const {
        isLeader,
        leadChoir,
        followChoir,
    } = useHoursContext();

    const l = `psalm ${leadChoir ? '' : 'psalm-disabled'}`;
    const f = `psalm ${followChoir ? '' : 'psalm-disabled'}`;
    

    return (
        <>
            <p className="office-title"> PSALM 44 Eructavit cor meum </p>
            <div className="flex flex-col gap-y-1">
                <p className="psalm">
                    <span className={ isLeader ? '' : 'psalm-disabled'}>MY heart hath uttered a good word: *</span>
                    <span className={ leadChoir ? '' : 'psalm-disabled'}> I address my works to the King.</span>
                </p>
                <p className={f}>
                    My tongue is the pen of a writer *
                    that writeth swiftly.
                </p>
                <p className={l}>
                    Thou art beautiful above the sons of men, grace is poured forth on Thy lips; *
                    therefore God hath blessed Thee forever.
                </p>
                <p className={f}>
                    Gird Thy sword upon Thy thigh, *
                    O Thou most mighty.
                </p>
                <p className={l}>
                    With Thy comeliness and Thy beauty, *
                    go forth, advance prosperously, and reign.
                </p>
                <p className={f}>
                    In behalf of truth and meekness and justice: *
                    and Thy right hand shall guide Thee wondrously.
                </p>
                <p className={l}>
                    Thy arrows are sharp: under Thee shall people fall, *
                    into the hearts of the King's enemies.
                </p>
                <p className={f}>
                    Thy throne, O God, is for ever and ever: *
                    the scepter of Thy kingdom is a scepter of uprightness.
                </p>
                <p className={l}>
                    Thou hast loved justice and hated iniquity: *
                    therefore God, Thy God, hath annointed Thee with the oil of gladness above Thy fellows.
                </p>
                <p className={f}>
                    Myrrh and aloes and cassia perfume Thy garments, from out of ivory palaces: *
                    from which kings' daughters have delighted Thee in Thy honor.
                </p>
                <p className={l}>
                    On Thy right hand standeth the queen, *
                    in golden raiment wrought about with variety.
                </p>
                <p className={f}>
                    Hearken, O daughter, and consider, and incline thy ear; *
                    forget also thy own people and thy father's house.
                </p>
                <p className={l}>
                    And the King shall greatly desire thy beauty: *
                    for He is the Lord thy God, and Him they shall adore.
                </p>
                <p className={f}>
                    And the daughters of Tyre, *
                    all the rich ones of the people, with gifts shall entreat thy face.
                </p>
                <p className={l}>
                    All the glory of the King's daughter is from within, *
                    with fringes of gold, arrayed in diverse colors.
                </p>
                <p className={f}>
                    After her shall virgins be brought unto the King: *
                    her neighbors shall be brought unto thee.
                </p>
                <p className={l}>
                    With joy and gladness shall they be brought: *
                    they shall be brought into the temple of the King.
                </p>
                <p className={f}>
                    Instead of thy fathers, sons are born to thee: *
                    thou shalt make them princes over all the earth.
                </p>
                <p className={l}>
                    They shall remember thy name *
                    from generation to generation.
                </p>
                <p className={f}>
                    Therefore shall the people praise thee for ever: * <br />
                    <span className="office-instruction">(Stand and Bow)</span><br />
                    yea, for ever and ever.
                </p>
                <GloriaPatri noBow={true} />
            </div>
        </>
    )
}

export default Psalm44;