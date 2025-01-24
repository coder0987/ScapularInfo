import CompiledNotice from "@/components/shared/CompiledNotice";

const SevenSorrows = () => {
  return (
    <div className="p-5 md:px-4 lg:p-6 flex-1 flex flex-col gap-6 m-2">
        <h2 className="title">Seven Sorrows of Mary</h2>
        <div className="flex flex-col items-start justify-start space-y-4">
            <p className="pr">See the full form of the prayer on <a target="_blank" className="text-sky-500" href="https://www.ewtn.com/catholicism/library/seven-dolors-of-the-blessed-virgin-mary-5437">EWTN</a></p>
            <p className="pr">
              Honor her daily by saying seven Hail Marys while meditating on her tears and sorrows:
            </p>
            <ol className="list-decimal pr pl-6">
              <li>The prophecy of Simeon. (St. Luke 2:34, 35)</li>
              <li>The flight into Egypt. (St. Matthew 2:13, 14)</li>
              <li>The loss of the Child Jesus in the temple. (St. Luke 2: 43-45)</li>
              <li>The meeting of Jesus and Mary on the Way of the Cross.</li>
              <li>The Crucifixion.</li>
              <li>The taking down of the Body of Jesus from the Cross.</li>
              <li>The burial of Jesus</li>
            </ol>
            <p className="pr">Blessings (7 from Mary):</p>
            <ol className="list-decimal pr pl-6">
              <li>“I will grant peace to their families.”</li>
              <li>“They will be enlightened about the divine Mysteries.”</li>
              <li>“I will console them in their pains and I will accompany them in their work.”</li>
              <li>“I will give them as much as they ask for as long as it does not oppose the adorable will of my divine Son or the sanctification of their souls.”</li>
              <li>“I will defend them in their spiritual battles with the infernal enemy and I will protect them at every instant of their lives.”</li>
              <li>“I will visibly help them at the moment of their death—they will see the face of their mother.”</li>
              <li>“I have obtained this grace from my divine Son, that those who propagate this devotion to my tears and dolors will be taken directly from this earthly life to eternal happiness, since all their sins will be forgiven and my Son will be their eternal consolation and joy."</li>
            </ol>
            <p className="pr">Bonus 4 blessing from Jesus:</p>
            <ol className="list-decimal pr pl-6">
              <li>Those who before death invoke the Divine Mother in the name of her sorrows should obtain true repentance of all their sins.</li>
              <li>He would protect all who have this devotion in their tribulations, and that He would protect them especially at the hour of death.</li>
              <li>He would impress upon their minds the remembrance of His Passion, and that they should have their reward for it in heaven.</li>
              <li>He would commit such devout clients to the hands of Mary, with the power to dispose of them in whatever manner she might please, and to obtain for them all the graces she might desire.</li>
            </ol>
        </div>
        <CompiledNotice author="Samuel Mach" date="Nov. 2024" />
    </div>
  );
};

export default SevenSorrows;