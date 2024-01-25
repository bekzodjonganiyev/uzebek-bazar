import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

function UzTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Maxsulto nomi o'zbekcha"
            id="name"
            type="text"
            variant="outlined"
            autoFocus
            fullWidth
          />
        )}
      />

      <Controller
        name="desc"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Maxsulto haqida o'zbekcha"
            id="desc"
            type="text"
            variant="outlined"
            multiline
            rows={10}
            autoFocus
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default UzTab;
