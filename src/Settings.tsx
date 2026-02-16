import { findByProps } from "@vendetta/metro";
import { React, ReactNative } from "@vendetta/metro/common";
import { Forms as UiForms } from "@vendetta/ui/components";
import { showToast } from "@vendetta/ui/toasts";
import { getDaysToTet } from "./index";

const { ScrollView, View, Text, Pressable } = ReactNative;
const Forms = UiForms || findByProps("FormSection", "FormRow", "FormText") || {};
const { FormSection, FormRow, FormText } = Forms;
const ThemedText = FormText ?? Text;

export default function Settings() {
  const days = getDaysToTet();
  const message = days === 0 ? "Hôm nay là Tết rồi!" : `Còn ${days} ngày nữa là Tết!`;

  return (
    <ScrollView style={{ flex: 1 }}>
      <FormSection title="Tết Âm Lịch">
        <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>
          <ThemedText style={{ fontSize: 20, fontWeight: "700", textAlign: "center", color: "#ff4d4d" }}>
            {message}
          </ThemedText>
        </View>

        <View style={{ paddingHorizontal: 16, paddingBottom: 20 }}>
          <Pressable
            onPress={() => showToast(message)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#d33c3c" : "#ff4d4d",
                paddingVertical: 12,
                borderRadius: 10,
                alignItems: "center"
              }
            ]}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "800" }}>
              KIỂM TRA THÔNG BÁO
            </Text>
          </Pressable>
        </View>
      </FormSection>

      <FormSection title="Thông tin">
        <FormRow label="Tác giả" subLabel="linhmc_new" />
        <FormRow label="Phiên bản" subLabel="1.0.0" />
      </FormSection>
    </ScrollView>
  );
}
