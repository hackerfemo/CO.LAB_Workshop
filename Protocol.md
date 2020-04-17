# Musical glove protocol

## Radio groups
## If you have multiple boxes then you will need teams - otherwise it is only necessary to use 1

team 1: radio group = 41

team 2: radio group = 42

team 3: radio group = 43

## Radio protocol

First character is the type of micro:bit

Second character is note to select

```
R - Rhythm
    R. stop note
    RC play from CMaj
    RG play from GMaj
    RF play from FMaj
    (RP ProMode - play any note)
    
# A, B, D & E are in brackets as they are not used in the example sender code
H - Harmony
    H. stop
      (HA play A)
      (HB play B)
    HC play C
      (HD play D)
      (HE play E)
    HF play F
    HG play G
    
M - Melody  (1 3 5 7 .)
    M. stop
    M1 play 1st interval note in selected chord
    M3 play 3rd interval node in selected chord
    M5 play 5th interval note in selected chord
    M7 play 7th interval note in selected chord
    
m - Lower Melody  (1 3 5 7 .)
    m. stop
    m1 play 1st interval note in selected chord
    m3 play 3rd interval node in selected chord
    m5 play 5th interval note in selected chord
    m7 play 7th interval note in selected chord
```

The rhythm receiver will play a short note in given chord

The harmony receiver will play the harmony note

The melody receiver will select a note from the chord provided by the H message

The lower melody reciever will also select a note from the chord provided by the H message but will play it in a lower octave

##NOTES

1. Don't send messages too fast, otherwise you will flood
the radio network. You can send multiple messages to ensure
that the occasional lost message does not affect playback.

2. If a receiver receives the same note as previously,
it should not trigger a new note, otherise you will get
some terrible clicking.

3. Currently only 3 chords are supported (C F G)

4. The 1,3,5,7 notes in the selected chord will automatically sound harmonic
(sweet).


