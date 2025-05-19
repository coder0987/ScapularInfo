import { useHoursContext } from "@/context/HoursContext";
import GloriaPatri from "../shared/GloriaPatri"


const Psalm18 = () => {
    const {
        isLeader,
        leadChoir,
        followChoir,
    } = useHoursContext();

    const l = `psalm ${leadChoir ? '' : 'psalm-disabled'}`;
    const f = `psalm ${followChoir ? '' : 'psalm-disabled'}`;


    return (
        <>
            <p className="office-title"> PSALM 18 Caeli enarrant </p>
            <div className="flex flex-col gap-y-1">
                <p className="psalm">
                    <span className={ isLeader ? '' : 'psalm-disabled'}>THE heavens are telling the glory of God: *</span>
                    <span className={ leadChoir ? '' : 'psalm-disabled'}> and the firmament declareth the works of His hands.</span>
                </p>
                <p className={f}>
                    Day unto day uttereth speech: *
                    and night unto night showeth knowledge.
                </p>
                <p className={l}>
                    Unto all the earth their sound hath gone forth, *
                    and their words unto the ends of the world.
                </p>
                <p className={f}>
                    In the sun hath He set His tabernacle, *
                    and as a bridegroom cometh out of his bride chamber.
                </p>
                <p className={l}>
                    He hath rejoiced as a giant to run his course: *
                    His going forth is from the end of heaven.
                </p>
                <p className={f}>
                    And his course even unto the end thereof: *
                    and there is none that is hid from his heat.
                </p>
                <p className={l}>
                    The law of the Lord is without spot, converting souls: *
                    the testimony of the Lord is faithful, giving wisdom to little ones.
                </p>
                <p className={f}>
                    The precepts of the Lord are right, rejoicing hearts: *
                    the commandment of hte Lord is lightsome, enlightening the eyes.
                </p>
                <p className={l}>
                    The fear of the Lord is holy, enduring forever and ever: *
                    the judgements of the Lord are true, justified in themselves.
                </p>
                <p className={f}>
                    More to be desired are they than gold and many precious stones: *
                    and sweeter than honey and the honeycomb.
                </p>
                <p className={l}>
                    For Thy servant keepeth them: *
                    and in keeping them there is great reward.
                </p>
                <p className={f}>
                    Who understandeth his sins? From my secret ones cleanse me, *
                    and from strangers spare Thy servant.
                </p>
                <p className={l}>
                    If they have no dominion over me, then shall I be without spot: *
                    and I shall be cleansed from grievous sin.
                </p>
                <p className={f}>
                    And the sayings of my mouth *
                    and meditation of my heart in Thy sight shall be ever pleasing.
                </p>
                <p className={l}>
                    O Lord, my helper * <br />
                    <span className="office-instruction">(Stand and Bow)</span><br />
                    and my Redeemer.
                </p>
                <GloriaPatri noBow={true} />
            </div>
        </>
    )
}

export default Psalm18;