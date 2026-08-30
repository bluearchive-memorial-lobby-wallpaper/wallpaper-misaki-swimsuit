import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-misaki-swimsuit",
  slug: "misaki-swimsuit",
  title: "Misaki (Swimsuit)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 13.333333969116211,
    "lines": [
      {
        "id": "ch0268_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "ん……。",
          "ko": "음…….",
          "en": "Hm..."
        }
      },
      {
        "id": "ch0268_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "もうちょっと……\nこっちも削って……。",
          "ko": "조금 더…… 이쪽도 파내고…….",
          "en": "A bit more... Dig out here too..."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0268_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "ここに枝を……この角度で……。",
          "ko": "여기에 나뭇가지를……\n이 각도로…….",
          "en": "And this stick...can go right here..."
        }
      },
      {
        "id": "ch0268_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "……うん、これでいいかな。",
          "ko": "……응, 이걸로 됐으려나.",
          "en": "...Hm, I suppose that should do it."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 14.333333969116211,
    "lines": [
      {
        "id": "ch0268_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "……あれ？",
          "ko": "……어라?",
          "en": "Wait..."
        }
      },
      {
        "id": "ch0268_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "なんで私、\n砂の城なんて作ってるの……？",
          "ko": "왜 내가 모래성 같은 걸\n만들고 있는 거지……?",
          "en": "Why am I the one building this...?"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 9.500000953674316,
    "lines": [
      {
        "id": "ch0268_memoriallobby_4",
        "text": {
          "zh-cn": "",
          "ja": "……っ！先生……！",
          "ko": "……읏! 선생님……!",
          "en": "...Ugh! Sensei...!"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0268_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "最初からこうさせる\nつもりだったんじゃ……！",
          "ko": "처음부터\n이럴 계획이었구나……!",
          "en": "So this was your plan all along...!"
        }
      },
      {
        "id": "ch0268_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "……全然、\nこれっぽっちも、\n楽しんでないからね！",
          "ko": "……전혀,\n요만큼도 즐기고 있지 않으니까!",
          "en": "...Don't think I'm enjoying this, not at all!"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
