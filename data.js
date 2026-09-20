// Original study summaries and practice questions based on the supplied notes.
const P=(label,text,question)=>({label,text,question});
const Q=(question,options,correct,explanation)=>({question,options,correct,explanation});
const T=(name,summary,points,example,memory,quiz)=>({name,summary,points,example,memory,quiz});
const units=[{name:'Learning, creativity & design',source:'https://notes.lpuverto.xyz/Sem1/INT335/Unit1/notes',topics:[
T('Learning & creative thinking','Build knowledge. Connect it in useful new ways.',[
P('Original + useful','Creativity combines originality with usefulness. A surprising idea is not automatically a helpful one. Learning supplies the knowledge that creative thinking recombines.','What two qualities make an idea creative?'),
P('Open up, then narrow down','Divergent thinking produces many alternatives. Convergent thinking compares them using criteria such as cost, safety and user value.','How do divergent and convergent thinking differ?'),
P('Recall and reflect','Try retrieving a concept without looking. Then examine what worked and what did not: reflection turns experience into knowledge you can reuse.','Why are recall and reflection valuable?')],
'For a crowded lunch counter, first list ten possible improvements. Then compare them against space, cost and waiting time. Generating is divergent; selecting is convergent.',
'Diverge = possibilities. Converge = priorities.',[
Q('A team lists fifteen possibilities and then compares their cost. Which sequence is this?',['Convergent then divergent','Divergent then convergent','Prototype then empathize','Test then observe'],1,'Generating alternatives is divergent thinking; comparing them against criteria is convergent thinking.'),
Q('Which best describes creativity?',['Any unusual idea','A memorised solution','An original and useful idea','A technically complex idea'],2,'Originality alone is novelty. Creativity also requires usefulness.'),
Q('Which most directly checks whether you can retrieve a concept?',['Explain it without looking at your notes','Reread it silently','Highlight every sentence','Copy it word for word'],0,'Retrieval requires you to produce the knowledge rather than recognise it on the page.')]),
T('Memory & mental workload','Make room for understanding, not unnecessary confusion.',[
P('Working memory is limited','Working memory temporarily holds information during reasoning. Long, poorly organised instructions can overwhelm it. Long-term memory stores knowledge and schemas.','How does working memory differ from long-term memory?'),
P('Three load concepts','Intrinsic load comes from task complexity. Extraneous load comes from confusing presentation. Germane effort supports building useful mental schemas.','What are intrinsic load, extraneous load and germane effort?'),
P('Connect new to known','Meaning, images and prior knowledge support encoding. Attention and emotions also matter: curiosity can encourage exploration while anxiety can restrict it.','How can you make information easier to encode?')],
'A payment form asks for unfamiliar information and gives a tangled paragraph of instructions. The task itself adds intrinsic load; the confusing instructions add extraneous load.',
'Intrinsic = the task. Extraneous = the presentation.',[
Q('Confusing instructions add which kind of cognitive load?',['Intrinsic','Emotional','Long-term','Extraneous'],3,'Extraneous load comes from the way information is presented, rather than the essential complexity of the task.'),
Q('Which system temporarily holds information while you reason?',['Long-term memory','Working memory','A persona','An empathy map'],1,'Working memory handles a limited amount of information during active processing.'),
Q('An expert quickly recognises a familiar design problem because of stored:',['Random guesses','Interface colours','Schemas','Survey counts'],2,'Schemas in long-term memory organise knowledge and help experts recognise patterns.')]),
T('Focused & diffuse modes','Work deliberately, step away, then return to evaluate.',[
P('Focused means deliberate','Focused thinking supports calculations, careful reading, checking constraints and refining a solution. Attention stays close to the task.','When is focused thinking useful?'),
P('Diffuse means associative','Relaxed thinking can connect ideas more broadly. An analogy may emerge during a walk or a change of activity after earlier work on a problem.','What does diffuse thinking contribute?'),
P('Alternate the modes','Understand the problem, pause, allow new associations, then evaluate them. Incubation supports deliberate work; it does not replace preparation.','What is an effective focused and diffuse thinking cycle?')],
'You cannot find a programming error. During a walk you wonder whether the input is wrong. Back at your desk, you trace the input and test the fix: diffuse insight, focused verification.',
'Focus → pause → connect → check.',[
Q('Checking whether a prototype meets a five-minute task requirement mainly uses:',['Focused thinking','Functional fixedness','Diffuse thinking','Latent needs'],0,'Checking a defined requirement demands deliberate analysis.'),
Q('A useful analogy appears during a relaxed walk after studying a problem. This illustrates:',['Conformity','Premature judgment','Diffuse thinking','Quantitative research'],2,'Diffuse thinking supports broader associations beyond the immediate line of thought.'),
Q('Which statement about incubation is most accurate?',['It replaces subject knowledge','It guarantees an answer','It means avoiding all effort','It can help after deliberate work'],3,'Stepping away may permit restructuring, but knowledge and focused effort remain necessary.')]),
T('VARK & learning cycles','Use a variety of approaches and test what you understand.',[
P('VARK describes preferences','Visual: diagrams. Aural: discussion. Read/write: text. Kinesthetic: hands-on activity. These are preferences, not permanent limits on ability.','What does VARK stand for?'),
P('Kolb links doing and thinking','Concrete experience → reflective observation → abstract conceptualisation → active experimentation. Experience becomes a principle that you try out again.','What are the four stages of Kolb’s learning cycle?'),
P('Bloom moves toward creation','Remember → understand → apply → analyse → evaluate → create. Matching teaching to a fixed VARK label is not established as a reliable way to improve achievement.','What is Bloom’s progression?')],
'Build a paper prototype, reflect on a failed interaction, infer a design principle, then try a revised prototype. That sequence follows Kolb’s cycle.',
'Kolb: do, reflect, explain, try. VARK: vary your study.',[
Q('Which VARK preference emphasises practical activity?',['Visual','Kinesthetic','Read/write','Aural'],1,'Kinesthetic preferences concern hands-on learning, demonstrations and experience.'),
Q('What follows reflective observation in Kolb’s cycle?',['Concrete experience','Remembering','Active experimentation','Abstract conceptualisation'],3,'Reflection leads to abstract conceptualisation, followed by active experimentation.'),
Q('Which is the most defensible use of VARK?',['Use varied methods and check learning','Never read if you prefer listening','Assign permanent ability labels','Replace practice with a questionnaire'],0,'VARK can guide reflection on preferences, but should not restrict learning to one mode.')]),
T('Breaking cognitive blocks','Question the familiar so you can see new possibilities.',[
P('Functional fixedness','Seeing an object only in its familiar role hides alternative uses. Start with its properties rather than its label.','What is functional fixedness?'),
P('Blocks narrow the problem','Fear of criticism, assumption lock-in and narrow framing can prevent useful ideas. Expertise can also encourage over-reliance on a familiar solution.','What kinds of blocks restrict creative thinking?'),
P('Reframe before judging','Try analogies, changed constraints, quick sketches and “How might we?” questions. Separate generation from evaluation to reduce premature criticism.','How can a team reduce cognitive blocks?')],
'A box seems like packaging until you list its properties: hollow, portable, stackable. Now you can imagine a drawer organiser or display stand.',
'Properties before purpose. Possibilities before judgment.',[
Q('Seeing a box only as packaging is:',['Triangulation','Convergent thinking','Functional fixedness','Empathic conduct'],2,'Functional fixedness restricts an object to its conventional function.'),
Q('A participant withholds an idea because others might laugh. This is primarily:',['An emotional block','A quantitative method','A feasibility test','An explicit need'],0,'Fear of criticism is an emotional barrier to idea generation.'),
Q('Which practice reduces premature judgment?',['Reject unusual ideas immediately','Choose before researching','Use only familiar solutions','Generate alternatives before evaluating'],3,'Separating generation and evaluation gives unfamiliar possibilities room to develop.')]),
T('Creativity to innovation','An idea, a new creation and practical value are different achievements.',[
P('Creativity generates','Creativity produces an original, useful possibility. A concept or sketch can be creative before anything has been built.','What does creativity produce?'),
P('Invention creates','Invention introduces a technically new device, process or method. Its existence does not prove successful adoption or sustained value.','How is invention different from innovation?'),
P('Innovation delivers value','Innovation implements ideas in practice. Incremental innovation improves an existing approach; radical innovation introduces a fundamentally different one.','What distinguishes incremental and radical innovation?')],
'Imagine a solar-charging backpack: creativity. Develop a new working circuit: invention. Make a useful product with workable pricing and support: innovation.',
'Idea → new creation → practical value. Innovation can also improve a process.',[
Q('Reorganising a queue and successfully reducing waiting is:',['Only invention','Innovation','Only novelty','Functional fixedness'],1,'An implemented process improvement can create value without inventing a device.'),
Q('Reducing an existing product’s charging time is usually:',['Radical innovation','Emotional empathy','Incremental innovation','A persona'],2,'Incremental innovation improves an existing product or process.'),
Q('A new technical invention has never been adopted. Which conclusion is safest?',['Invention does not guarantee innovation','It cannot be an invention','It must already create market value','It proves users need it'],0,'Technical novelty and successful implementation with value are different criteria.')]),
T('Design thinking foundations','Begin with people, then learn through small experiments.',[
P('Human-centred evidence','Understand what people do, feel and need in their context. Observation and interviews challenge assumptions before the team selects a solution.','Why does design thinking begin with empathy?'),
P('Experiment to learn','Paper screens, role-plays and storyboards make assumptions testable. Testing informs revision rather than serving only as final approval.','What is the purpose of an early prototype?'),
P('Include consequences','Consider disability, privacy, affordability and cultural context. Commercial success alone does not establish that a design is ethical.','What should ethical design consider?')],
'“Build an app” commits to a solution. “Help students know the lunch menu before leaving class” defines a need that could be met by several solutions.',
'Understand the need before choosing the feature.',[
Q('Which is the strongest starting point?',['Choose the newest technology','Understand users in context','Copy a competitor’s interface','Build before asking questions'],1,'Human-centred design begins with evidence about people and their situation.'),
Q('An early paper prototype mainly helps a team:',['Avoid all user feedback','Prove commercial success','Finish production code','Test assumptions cheaply'],3,'A low-cost representation makes an idea concrete enough to learn from.'),
Q('Which belongs in ethical design evaluation?',['Only visual appeal','Only revenue','Privacy and accessibility','Only technical novelty'],2,'Ethical design includes effects on people, access, privacy and potential harm.')]),
T('History & evolution','Design thinking grew from several overlapping traditions.',[
P('Methods and usability','Engineering and industrial design developed systematic methods. Human-computer interaction, including Donald Norman’s influence, emphasised usability and human capabilities.','Which traditions contributed to design thinking?'),
P('Participation matters','Scandinavian participatory design in the 1970s involved workers in shaping technologies affecting their jobs. People contribute as collaborators, not only research subjects.','What is participatory design?'),
P('From products to systems','IDEO popularised human-centred innovation; Stanford d.school developed cross-disciplinary teaching. The approach now extends to services and organisations but still needs expertise and resources.','What are the limits of design thinking?')],
'A workplace software team invites workers to help shape the workflow. Their first-hand knowledge can reveal problems an external designer would miss.',
'Methods + usability + participation → broader design practice.',[
Q('Participatory design involves:',['Affected people in shaping solutions','Only senior management','Only software developers','Only final customers after launch'],0,'Affected people contribute knowledge and influence the design process.'),
Q('Donald Norman’s influence is associated with:',['Patent registration','Pricing strategy','Usability and human capabilities','Manufacturing volume'],2,'The notes link Norman with human-computer interaction, usability and affordances.'),
Q('Design thinking cannot compensate for:',['Learning from users','Missing technical expertise and implementation resources','Iterative testing','Interdisciplinary collaboration'],1,'A sound process still requires the expertise, resources and decision-making needed to implement solutions.')]),
T('Stanford & IDEO frameworks','Use a process to learn and lenses to judge the fit.',[
P('Stanford’s five modes','Empathize → Define → Ideate → Prototype → Test. The cycle is flexible: a failed test may require a new understanding of users or a new problem statement.','What are Stanford’s five design thinking modes?'),
P('IDEO’s HCD phases','Hear: learn in context. Create: interpret findings and co-design concepts. Deliver: plan resources, operations, partners and implementation. Phases can overlap.','What happens in Hear, Create and Deliver?'),
P('Three evaluation lenses','Desirability: do people want it? Feasibility: can it work? Viability: can it be sustained? These are evaluation lenses, not the same thing as the HCD phases.','How do desirability, feasibility and viability differ?')],
'An app may be technically feasible but unwanted. A service may be wanted and buildable yet too expensive to maintain. Evaluate all three lenses while iterating.',
'Stanford: E-D-I-P-T. IDEO: Hear-Create-Deliver. Lenses: want-work-sustain.',[
Q('Which is Stanford’s usual sequence?',['Define, Test, Empathize, Prototype, Ideate','Hear, Create, Deliver','Empathize, Define, Ideate, Prototype, Test','Prototype, Define, Deliver, Test, Hear'],2,'The five modes begin with empathy and continue through defining, ideating, prototyping and testing, with iteration.'),
Q('Which IDEO phase includes operating processes and implementation planning?',['Hear','Deliver','Empathize','Observation'],1,'Deliver connects concepts to practical resources, operations and implementation.'),
Q('Can this service be maintained within its budget? This primarily concerns:',['Desirability','Empathy','Originality','Viability'],3,'Viability asks whether the solution is economically and organisationally sustainable.')]),
T('Learning from design cases','Technical sophistication is only one part of a useful solution.',[
P('Fit the local context','Aravind combines efficient patient flow with accessible care. M-Pesa uses mobile phones and agent networks to address barriers to banking access.','What do Aravind and M-Pesa illustrate?'),
P('Observe real behaviour','The IDEO shopping-cart example shows how observing shoppers and staff reveals safety and manoeuvrability needs beyond the initial brief.','What does the shopping-cart example teach?'),
P('Adoption is not automatic','Segway faced price, regulation and everyday-use barriers. New Coke underestimated emotional attachment to the original despite favourable taste-test evidence.','Why can a technically capable or well-tested product still struggle?')],
'A taste test measures a particular preference in a particular setting. It may not capture what a familiar brand means to someone in everyday life.',
'Context + trust + implementation matter as much as the concept.',[
Q('The New Coke case highlights the risk of overlooking:',['Software reliability','Emotional attachment and continuity','Patient flow','Mobile infrastructure'],1,'Taste-test results did not fully capture the meaning consumers attached to the original product.'),
Q('The Segway case shows that:',['Engineering novelty guarantees adoption','Research is unnecessary','High price always means quality','Technical capability alone does not ensure everyday value'],3,'Price, regulation, infrastructure and social context can obstruct adoption.'),
Q('M-Pesa’s example emphasises:',['Matching local needs and infrastructure','Replacing all local networks','Ignoring trust','Prioritising novelty over access'],0,'Familiar mobile phones and agent networks helped address access needs in context.')])]},
{name:'Empathy, observation & problems',source:'https://notes.lpuverto.xyz/Sem1/INT335/Unit2/notes',topics:[
T('Empathy & evidence','Understand another person’s perspective before defining their problem.',[
P('Three dimensions of empathy','Cognitive empathy understands thoughts. Emotional empathy recognises feelings. Compassionate empathy uses understanding to help while preserving the user’s control.','What are cognitive, emotional and compassionate empathy?'),
P('Evidence before assumptions','Record direct quotes and observable actions separately from interpretations. Diverse recruitment and reflection help limit confirmation and similarity biases.','How should evidence and interpretation be recorded?'),
P('Triangulate and respect','Compare interviews, observation and analytics. Obtain informed consent, protect personal data and avoid stereotypes or manipulation.','What is triangulation, and why does it matter?')],
'“I keep the receipt until delivery” is a quote. “This user lacks trust” is an interpretation. Ask what the receipt is for before declaring the reason.',
'Think, feel, help. Observe first; interpret carefully.',[
Q('Understanding why a user distrusts an estimate is mainly:',['Emotional empathy','Cognitive empathy','A completion metric','A usability error'],1,'Cognitive empathy concerns the user’s reasoning and perspective.'),
Q('Comparing an interview finding with observation and analytics is:',['Stereotyping','Guessing','Triangulation','Feature selection'],2,'Triangulation checks whether different sources support the same finding.'),
Q('Which best shows compassionate empathy?',['Help resolve difficulty while preserving user control','Take over every decision','Collect extra personal data','Assume the user is incapable'],0,'Compassionate empathy translates understanding into help without removing agency.')]),
T('Computational empathy','Use software signals to offer help, not to guess private feelings.',[
P('Signals suggest difficulty','Repeated clicks, undo actions, long task times and support requests may indicate a problem. None proves a particular emotion on its own.','Why do repeated clicks not prove frustration?'),
P('Respond constructively','Provide contextual help, recoverable errors, informative feedback and accessible defaults. Combine patterns with research before choosing a response.','How can developers put empathy into software behaviour?'),
P('Protect the person','Use consent, data minimisation, security, explainability and opt-out controls. Capture events, aggregate patterns, interpret with interviews, then test improvements.','What safeguards belong in computational empathy?')],
'After three failed submissions, a form offers specific help and keeps the entered data. It need not label the user “angry” to respond usefully.',
'A click is an action, not an emotion.',[
Q('Repeated clicking may indicate:',['Only anger','Only poor skill','A definite emotional diagnosis','Several possible causes requiring context'],3,'Urgency, habit, device problems or frustration can all produce similar behaviour.'),
Q('Which response best supports a struggling user?',['Clear guidance while preserving their entered data','Delete the form after an error','Hide all error messages','Disable help'],0,'Useful feedback and recovery reduce the cost of mistakes.'),
Q('Data minimisation means:',['Store everything forever','Collect only what is needed for the purpose','Remove all consent controls','Publish individual logs'],1,'Collecting only necessary data reduces exposure of private circumstances.')]),
T('Qualitative & quantitative research','Numbers show scale. Conversations and observation explain meaning.',[
P('Qualitative gives depth','Interviews, diaries and field notes explore meanings and motivations. Small purposive samples provide depth, not automatic statistical representation.','What questions does qualitative research help answer?'),
P('Quantitative measures scale','Completion rates, error counts, ratings and times quantify patterns. Completion rate = completed ÷ attempted × 100. Sampling affects what you can infer.','How is task completion rate calculated?'),
P('Mix the methods','Analytics can identify a drop-off point, interviews can explain the obstacle, and usability testing can assess a revision. One method does not answer every question.','What does a mixed-method study look like?')],
'Analytics shows 28% of sessions stop at identity verification. Interviews suggest users do not understand why ID is needed. Test clearer explanations rather than guessing from the percentage.',
'Qualitative = why/how. Quantitative = how many/how much.',[
Q('Which is quantitative data?',['An interview transcript','A diary story','A field-note description','Task time in seconds'],3,'A numerical duration is a quantitative measurement.'),
Q('72 of 90 users complete a task. What is the completion rate?',['72%','90%','80%','125%'],2,'72 ÷ 90 × 100 = 80%.'),
Q('Which study best combines methods?',['Locate drop-off with analytics, explore causes in interviews, test a revision','Use counts alone to assume motivation','Ask only one leading question','Ignore contradictory observations'],0,'Different methods complement one another across diagnosis and evaluation.')]),
T('Field observation & AEIOU','Study the work where it actually happens.',[
P('Activities and environments','Activities are goal-directed actions. Environments are the physical or digital setting: noise, light, layout, connectivity and privacy.','What do A and E represent in AEIOU?'),
P('Interactions, objects, users','Interactions are exchanges among people and systems. Objects are tools and artefacts. Users are the participants, roles and capabilities involved.','What do I, O and U represent in AEIOU?'),
P('Record what happened','Write “checked the list four times” instead of “was confused.” Watch sequences and workarounds. Your presence can change behaviour, and rare events may not occur.','What makes a strong observation note?')],
'At a ticket machine: buying a ticket is an activity; a noisy station is the environment; asking staff for help is an interaction; the ticket is an object; the passenger is a user.',
'AEIOU = Activities, Environments, Interactions, Objects, Users.',[
Q('Noise, lighting and weak connectivity belong under:',['Activities','Environments','Objects','Users'],1,'They describe the conditions of the setting.'),
Q('A passenger asks an employee to explain a ticket machine. This is primarily:',['An object','A financial constraint','An environment','An interaction'],3,'The exchange between passenger and employee is an interaction.'),
Q('Which is the strongest observation note?',['The user hates the process','The user is impatient','The user checked the list four times in six minutes','The user needs a new app'],2,'It describes an observable action without assuming a feeling or solution.')]),
T('Interviews & inquiry','Ask about real experiences without putting words in people’s mouths.',[
P('Choose the structure','Structured interviews standardise questions. Semi-structured interviews combine common topics with probing. Unstructured interviews emphasise exploration.','How do structured, semi-structured and unstructured interviews differ?'),
P('Ask neutrally and specifically','Open prompts about a recent event produce richer evidence. “What happened next?” probes without suggesting an answer. Avoid praise embedded in a question.','What makes a useful interview question?'),
P('Go beneath the surface','Five Whys explores causes. Critical incidents examine a memorable success or difficulty. Contextual inquiry combines real work with the participant’s explanation.','How do Five Whys, critical incidents and contextual inquiry differ?')],
'Ask “Describe the last time you renewed the service,” not “How useful was our convenient dashboard?” The second question already tells the user what judgment you expect.',
'Recent events beat hypothetical promises. Neutral prompts beat leading questions.',[
Q('Which question is best for discovering an actual experience?',['Wasn’t our app wonderful?','Would you love a new feature?','Describe your last renewal','Why are you bad at this?'],2,'A neutral prompt anchored in a specific event avoids embedding a judgment.'),
Q('A participant works while explaining decisions to a researcher. This is:',['Contextual inquiry','Random sampling','Financial analysis','A leading question'],0,'Contextual inquiry observes actual work while exploring the reasons behind it.'),
Q('What is the purpose of Five Whys?',['Always interview five users','Investigate underlying causes','Generate exactly five features','End every interview in five minutes'],1,'The technique follows causes beyond a surface complaint.')]),
T('Explicit, implicit & latent needs','Listen to what is said, notice what is done, and validate the gap.',[
P('Explicit is stated','A user directly asks for an outcome or requirement. But a stated request may describe a familiar solution rather than the underlying need.','What is an explicit need?'),
P('Implicit is inferred','Behaviour, contradictions and workarounds suggest needs the user has not stated. Probe and compare across evidence before treating the inference as established.','How should an implicit need be validated?'),
P('Latent is unrecognised','Some needs become clear only when a new possibility appears. Automatic version recovery, for example, may reveal how much effort manual backup habits consumed.','What is a latent need?')],
'A user says the service is reliable yet photographs every confirmation. Investigate whether they need proof, traceability or reassurance; do not assume the reason.',
'Explicit = said. Implicit = inferred. Latent = not yet recognised.',[
Q('“I need a PDF invoice for reimbursement” is:',['A latent need','An explicit need','An unobserved emotion','A persona'],1,'The user states the requirement directly.'),
Q('A user photographs confirmations repeatedly. The best next step is:',['Declare that they distrust everyone','Ignore the behaviour','Add more screens immediately','Ask why and validate the possible need'],3,'The observation supports a question, not an automatic conclusion about motivation.'),
Q('A need not recognised until a new possibility appears is:',['Latent','Explicit','A functional bug','A direct quote'],0,'Latent needs may remain unrecognised until a different way of working becomes possible.')]),
T('Pain points & root causes','Find the obstacle behind the symptom.',[
P('Five pain-point categories','Functional: cannot complete a task. Usability: confusing use. Process: handoffs and delays. Financial: cost barriers. Emotional: uncertainty or loss of control.','What are the five pain-point categories?'),
P('Prioritise the impact','Record frequency, severity, duration, affected users and consequences. A frequent issue with serious consequences generally outranks a rare cosmetic complaint.','What evidence helps prioritise pain points?'),
P('Symptoms are not causes','Abandonment is a symptom. An unexplained identity request may be the cause. The fix might involve policy, language or service design rather than another feature.','Why is abandonment not a complete problem diagnosis?')],
'A registration page loses users. Observation reveals that an unexplained ID request creates distrust. A clearer reason and suitable data practices may matter more than a faster button.',
'Find the why behind the drop-off.',[
Q('Multiple approval handoffs create a long delay. This is mainly:',['Functional','Financial','Process','Demographic'],2,'Handoffs and approval delays belong to the service process.'),
Q('Unexpected charges preventing purchase are mainly a:',['Financial pain point','Persona','Field observation method','Functional invention'],0,'Fees and unpredictable costs are financial barriers.'),
Q('Which issue generally deserves the highest priority?',['A designer’s unsupported preference','A rare cosmetic complaint','The easiest change regardless of impact','A frequent issue with severe consequences'],3,'Frequency and severity help identify the most consequential problems.')]),
T('Problem statements & framing','Define a meaningful need without choosing the solution too early.',[
P('Describe the outcome','“Verify payment confidently” expresses a need. “Add a green button” selects a solution. Good framing keeps alternatives open.','How does a user need differ from a proposed solution?'),
P('Use a point of view','[User] needs a way to [need] because [research-grounded insight]. Identify the person, their context and why the need matters.','What is the point-of-view statement structure?'),
P('Synthesis stays traceable','Cluster evidence, find patterns, examine exceptions, infer needs and check against source data. Be focused enough to guide ideas, but broad enough for alternatives.','What makes a problem statement useful?')],
'First-time applicants need a way to confirm document acceptance because delayed feedback causes repeat uploads. The statement explains a user, need and evidence-based reason without prescribing a specific interface.',
'User + need + insight. Specific problem, open solution.',[
Q('Which describes a need without specifying a feature?',['Add a chatbot','Make the button green','Install a new database','Confirm payment confidently'],3,'The outcome leaves room for different ways to meet the need.'),
Q('A point-of-view statement connects:',['User, need and research-grounded insight','Budget, colour and logo','Technology, brand and deadline','Feature, slogan and price'],0,'The structure links a person’s need with a reason supported by research.'),
Q('A strong problem statement should be:',['So broad that anything fits','Focused yet open to alternative solutions','A list of untested assumptions','A fixed technical specification'],1,'It should guide ideation without prematurely locking the team into one implementation.')]),
T('Personas & target archetypes','Represent patterns in people’s lives, not fictional stereotypes.',[
P('Research-based models','A persona represents a significant behavioural pattern. An archetype captures shared goals and constraints of a group. Ground both in recurring evidence.','What makes a persona research-based?'),
P('Behaviour over decoration','Goals, motivations, capabilities and constraints guide design. An occasional mobile claimant with low process confidence is more useful than an age bracket alone.','Why is behavioural segmentation useful?'),
P('Keep models alive','Primary personas guide central decisions; secondary personas identify additional needs. Update models when research changes and avoid hiding diversity behind a stereotype.','How do primary and secondary personas differ?')],
'“Aged 25–34” says little about a claims workflow. “Uses a phone occasionally, needs reimbursement quickly, and fears submitting the wrong document” gives actionable design context.',
'A persona is a pattern backed by evidence.',[
Q('A reliable persona is based mainly on:',['A colourful fictional biography','Age stereotypes','Recurring researched behaviours','The designer’s habits'],2,'Recurring research patterns are the basis for an actionable persona.'),
Q('Which persona guides central design decisions?',['Primary','Decorative','Outdated','Random'],0,'The primary persona guides the core experience; secondary personas add needs to accommodate.'),
Q('When new research contradicts a persona, a team should:',['Ignore the evidence','Keep the persona unchanged','Discard all research','Revise the persona'],3,'Personas are working models that should evolve with evidence.')]),
T('Empathy maps & insights','Turn evidence into an explanation you can design around.',[
P('Says and does','Says contains direct quotations. Does contains observable actions. These make the user’s experience concrete without pretending to read their mind.','What belongs under Says and Does?'),
P('Thinks and feels','Thinks captures cautiously inferred concerns. Feels captures emotions supported by words, tone or behaviour. Label interpretations and keep links to source evidence.','How should Thinks and Feels be supported?'),
P('Insight explains a tension','An insight reveals an underlying motivation or cause. An empathy map is a synthesis tool, not raw evidence, and must remain connected to research records.','How does an insight differ from an observation?')],
'Someone says speed matters but checks every detail repeatedly. The observation is repeated checking. A research-supported insight may be that confidence, not speed alone, governs completion.',
'Says · Thinks · Does · Feels. Observation tells what; insight helps explain why.',[
Q('Where does an exact user quotation belong?',['Thinks','Says','Feels','Does'],1,'Direct quotations belong in Says, without rewriting them as an inferred emotion.'),
Q('Refreshing a page and checking email belong mainly under:',['Feels','Thinks','Does','Goals'],2,'They are observable actions.'),
Q('Which best describes a defensible insight?',['A meaningful explanation grounded in research','Any clever guess','A repeated quote with no interpretation','A feature the designer wants'],0,'An insight connects evidence to a meaningful need, motivation or tension.')])]}];
