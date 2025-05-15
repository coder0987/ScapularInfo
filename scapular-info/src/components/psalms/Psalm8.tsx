import GloriaPatri from "../shared/GloriaPatri"


const Psalm8 = ({ gloria }: { gloria: boolean }) => {
    return (
        <>
            <p className="office-title"> PSALM 8 Domine, Dominus noster </p>
            <div className="flex flex-col psalm gap-y-1">
                <p>
                    O LORD, our Lord, how admirable is Thy name in the Whole earth! *
                    For Thy magnificence is elevated above the heavens.
                </p>
                <p>
                    Out of the mouth of babes and sucklings Thou hast perfected praise because of Thine enemies, *
                    that Thou mayest destroy the enemy and the avenger.
                </p>
                <p>
                    For I will behold Thy heavens, the works of Thy fingers: *
                    the moon and the stars which Thou hast set.
                </p>
                <p>
                    What is man that Thou art mindful of him? *
                    or the son of man that Thou visitest him?
                </p>
                <p>
                    Thou hast made him a little less than the angels, Thou hast crowned him with glory and honor, *
                    and hast set him over the works of Thy hands.
                </p>
                <p>
                    All things Thou hast put under his feet: *
                    sheep and all oxen, yea, also the beasts of the field.
                </p>
                <p>
                    The birds of the air and the fishes of the sea, *
                    that pass through the paths of the sea.
                </p>
                <p>
                    O Lord, our Lord, *
                    how admirable is Thy name in all the earth!
                </p>
                {gloria && <GloriaPatri />}
            </div>
        </>
    )
}

export default Psalm8;